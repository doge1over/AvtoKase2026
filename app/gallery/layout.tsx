import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Фото работ автосервиса Автокейс в Токсово',
    description: 'Фотографии работ автосервиса Автокейс в Токсово: ремонт автомобилей, шиномонтаж и обслуживание. Ленинградское шоссе, 13А.',
    alternates: { canonical: '/gallery' },
    openGraph: {
        title: 'Фото работ — Автокейс в Токсово',
        description: 'Фотографии ремонта и обслуживания автомобилей в автосервисе Автокейс.',
        url: '/gallery',
        images: ['/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Фото работ — Автокейс в Токсово',
        description: 'Фотографии ремонта и обслуживания автомобилей.',
        images: ['/og-image.jpg'],
    },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
