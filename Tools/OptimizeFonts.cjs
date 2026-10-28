const fs = require('node:fs/promises');
const path = require('node:path');
const subsetFont = require('subset-font');
const fontverter = require('fontverter');
const createFont = require('next/dist/compiled/@next/font/dist/fontkit').default;

const ranges = [
    [0x20, 0x7e], // Latin and digits; other used characters are collected from app/.
    [0x400, 0x45f], // Cyrillic, including Ё/ё and Ukrainian letters.
];
const codepoints = new Set([0xa0, 0x202f, 0x490, 0x491, 0x2116, 0x20bd, 0x20ac, 0x2122, 0x2212]);
for (const [start, end] of ranges) {
    for (let code = start; code <= end; code++) codepoints.add(code);
}

async function includeSourceCharacters(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) await includeSourceCharacters(file);
        else if (/\.(tsx?|css)$/.test(entry.name)) {
            for (const character of await fs.readFile(file, 'utf8')) codepoints.add(character.codePointAt(0));
        }
    }
}

async function main() {
    await includeSourceCharacters(path.join(__dirname, '..', 'app'));
    const text = String.fromCodePoint(...codepoints);
    for (const [name, min, max] of [['Montserrat', 400, 700], ['Unbounded', 600, 900]]) {
        const input = await fs.readFile(path.join(__dirname, '..', 'public', 'fonts', `${name}.ttf`));
        const subset = await subsetFont(input, text, {
            targetFormat: 'woff2',
            keepFeatures: ['ccmp', 'locl', 'rlig', 'rvrn', 'rclt', 'liga', 'clig', 'calt', 'kern', 'mark', 'mkmk'],
            preserveNameIds: [0, 1, 2, 3, 4, 5, 6, 13, 14],
        });
        const original = createFont(input);
        const reduced = createFont(await fontverter.convert(subset, 'sfnt'));
        const missing = [...codepoints].filter(code => original.hasGlyphForCodePoint(code) && !reduced.hasGlyphForCodePoint(code));
        if (missing.length) throw new Error(`${name}: missing glyphs ${missing.join(', ')}`);
        if (reduced.variationAxes.wght.min !== original.variationAxes.wght.min || reduced.variationAxes.wght.max !== original.variationAxes.wght.max) {
            throw new Error(`${name}: incorrect weight range`);
        }
        const sample = 'АВТОКЕЙС Токсово Ёё 1 000 ₽ R13–R20+ →';
        for (let weight = min; weight <= max; weight += 100) {
            const width = font => font.getVariation({ wght: weight }).layout(sample).positions.reduce((sum, position) => sum + position.xAdvance, 0);
            // Allow at most 0.05% for re-encoding fractional font units.
            if (Math.abs(width(original) - width(reduced)) > width(original) * 0.0005) throw new Error(`${name}: changed text width at ${weight}: ${width(original)} → ${width(reduced)}`);
        }
        const output = path.join(__dirname, '..', 'public', 'fonts', `${name}-latin-cyrillic.woff2`);
        await fs.writeFile(output, subset);
        console.log(`${name}: ${subset.length} bytes; glyph coverage, weights and text widths verified`);
    }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
