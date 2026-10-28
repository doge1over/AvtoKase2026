import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicePage.module.css';
import { formatPrice, priceSource } from '../servicePrices';
import { serviceNavigation } from '../serviceNavigation';

type PriceRow = { name: string; price: number; unit: string; from?: boolean };

type Props = {
    title: string;
    path: string;
    intro: string;
    price: string;
    priceNote: string;
    priceRows: PriceRow[];
    priceHeading?: string;
    priceExplanation?: string;
    priceSourceLink?: boolean;
    ctaLabel?: string;
    stepsHeading?: string;
    reasonsHeading?: string;
    image: string;
    imageAlt: string;
    steps: string[];
    reasons: string[];
    questions: { question: string; answer: string }[];
    related: { href: string; title: string };
    sections?: { title: string; text: string; items?: string[] }[];
};

export default function ServicePage(props: Props) {
    const url = `https://avtoservis-toksovo.ru${props.path}`;
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Автокейс', item: 'https://avtoservis-toksovo.ru/' },
                    { '@type': 'ListItem', position: 2, name: 'Услуги и цены', item: 'https://avtoservis-toksovo.ru/uslugi' },
                    { '@type': 'ListItem', position: 3, name: props.title, item: url },
                ],
            },
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: props.title,
                description: props.intro,
                url,
                provider: { '@id': 'https://avtoservis-toksovo.ru/#autorepair' },
                areaServed: { '@type': 'Place', name: 'Токсово, Ленинградская область' },
                ...(props.priceRows.length ? { hasOfferCatalog: {
                    '@type': 'OfferCatalog', name: props.title,
                    itemListElement: props.priceRows.map(row => ({
                        '@type': 'Offer', priceCurrency: 'RUB', url,
                        ...(row.from ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: row.price, priceCurrency: 'RUB' } } : { price: row.price }),
                        itemOffered: { '@type': 'Service', name: row.name, description: `Объём: ${row.unit}` },
                    })),
                } } : {}),
            },
        ],
    };
    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
            <header className={styles.header}>
                <Link href="/" prefetch={false} className={styles.brand}>АВТОКЕЙС</Link>
                <a href="tel:+79681951071">+7 (968) 195-10-71</a>
            </header>
            <main className={styles.main}>
                <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}>
                    <Link href="/" prefetch={false}>Главная</Link> / <Link href="/uslugi" prefetch={false}>Услуги и цены</Link> / <span>{props.title}</span>
                </nav>
                <section className={styles.hero}>
                    <div>
                        <p className={styles.eyebrow}>ТОКСОВО · ЛЕНИНГРАДСКОЕ ШОССЕ, 13А</p>
                        <h1>{props.title}</h1>
                        <p>{props.intro}</p>
                        <p className={styles.price}>{props.price}</p>
                        <p className={styles.note}>{props.priceNote}</p>
                        <a className={styles.button} href="tel:+79681951071">{props.ctaLabel ?? 'Позвонить и записаться'}</a>
                    </div>
                    <Image src={props.image} alt={props.imageAlt} width={900} height={700} sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1280px) 45vw, 584px" className={styles.image} priority />
                </section>
                <section className={styles.section} aria-labelledby="price-heading">
                    <h2 id="price-heading">{props.priceHeading ?? 'Полный прайс'}</h2>
                    <p className={styles.note}>{props.priceExplanation ?? 'Цены из карточки Яндекс Карт, проверены 27 октября 2026 года. Перед визитом уточните стоимость и состав работ по телефону.'}</p>
                    {props.priceRows.length > 0 && <div className={styles.priceTableWrap}>
                        <table className={styles.priceTable}>
                            <thead><tr><th scope="col">Услуга</th><th scope="col">Объём</th><th scope="col">Цена</th></tr></thead>
                            <tbody>{props.priceRows.map(row => <tr key={row.name}><th scope="row">{row.name}</th><td>{row.unit}</td><td>{row.from ? 'от ' : ''}{formatPrice(row.price)}</td></tr>)}</tbody>
                        </table>
                    </div>}
                    {props.priceSourceLink !== false && <a className={styles.source} href={priceSource} target="_blank" rel="noopener noreferrer">Прайс в Яндекс Картах ↗</a>}
                </section>
                <div className={styles.columns}>
                    <section className={styles.panel}>
                        <h2>{props.stepsHeading ?? 'Как проходит обслуживание'}</h2>
                        <ol>{props.steps.map(step => <li key={step}>{step}</li>)}</ol>
                    </section>
                    <section className={styles.panel}>
                        <h2>{props.reasonsHeading ?? 'Когда обращаться'}</h2>
                        <ul>{props.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
                    </section>
                </div>
                {props.sections?.map(section => (
                    <section key={section.title} className={styles.section}>
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                        {section.items && <ul className={styles.checklist}>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
                    </section>
                ))}
                <section className={styles.section}>
                    <h2>Перед записью</h2>
                    <p>Сообщите марку и модель автомобиля и опишите нужные работы. Мастер уточнит стоимость, продолжительность обслуживания и условия гарантии до начала работ. Точное время визита согласуйте по телефону.</p>
                </section>
                <section className={styles.section}>
                    <h2>Вопросы и ответы</h2>
                    {props.questions.map(item => <details key={item.question} className={styles.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
                </section>
                <section className={styles.panel}>
                    <div className={styles.contactGrid}>
                        <div>
                            <h2>Как нас найти</h2>
                            <p>Токсово, Ленинградское шоссе, 13А. Ежедневно с 10:00 до 21:00.</p>
                            <p className={styles.note}>При записи уточните въезд и место парковки.</p>
                            <div className={styles.links}>
                                <a className={styles.button} href="tel:+79681951071">+7 (968) 195-10-71</a>
                                <a href="https://yandex.ru/maps/org/avtokeys/56867349266/" target="_blank" rel="noopener noreferrer">Построить маршрут ↗</a>
                                <a href="https://yandex.ru/maps/org/avtokeys/56867349266/reviews/" target="_blank" rel="noopener noreferrer">Отзывы в Яндексе ↗</a>
                            </div>
                        </div>
                        <figure>
                            <Image src="/gallery/IMG_7240 1.webp" alt="Здание автосервиса Автокейс и автомобили у въезда" width={600} height={450} sizes="(max-width: 767px) calc(100vw - 72px), 400px" className={styles.locationImage} />
                            <figcaption className={styles.note}>Здание автосервиса</figcaption>
                        </figure>
                    </div>
                </section>
                <nav aria-label="Другие страницы" className={styles.links}>
                    <Link href="/uslugi">Все услуги и цены →</Link>
                    <Link href={props.related.href}>{props.related.title} →</Link>
                    {serviceNavigation.filter(item => item.href !== props.path && item.href !== props.related.href).map(item => <Link href={item.href} key={item.href}>{item.title} →</Link>)}
                    <Link href="/gallery">Фотографии работ →</Link>
                    <Link href="/iz-devyatkino">Как приехать из Девяткино →</Link>
                    <Link href="/">На главную →</Link>
                </nav>
            </main>
            <footer className={styles.footer}>Автокейс · Токсово · Ленинградское шоссе, 13А</footer>
        </div>
    );
}
