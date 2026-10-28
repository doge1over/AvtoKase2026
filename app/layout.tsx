import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika";
import { tireStartingPrice, alignmentStartingPrice, otherPrices, airConditioningPrices, formatPrice } from './servicePrices';

const unbounded = localFont({
    src: '../public/fonts/Unbounded-latin-cyrillic.woff2',
    weight: '600 900',
    display: 'swap',
    variable: '--font-unbounded',
});

const montserrat = localFont({
    src: '../public/fonts/Montserrat-latin-cyrillic.woff2',
    weight: '400 700',
    display: 'swap',
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://avtoservis-toksovo.ru'),

    // Основные мета-теги
    title: "Автосервис в Токсово — цены и ремонт авто | Автокейс",
    description: `Автосервис Автокейс в Токсово. Шиномонтаж от ${formatPrice(tireStartingPrice)}, развал-схождение, диагностика и ремонт двигателя. Ленинградское шоссе, 13А. Ежедневно 10:00–21:00.`,

    // Авторство
    authors: [{ name: "Автокейс" }],
    creator: "Автокейс",
    publisher: "Автокейс",

    // Роботы
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Open Graph для соцсетей
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "https://avtoservis-toksovo.ru",
        siteName: "Автокейс — Автосервис в Токсово",
        title: "Автосервис Автокейс в Токсово — Ремонт авто, шиномонтаж, развал-схождение",
        description: "Качественный ремонт автомобилей в Токсово. Шиномонтаж, развал-схождение, диагностика, ремонт двигателя. Рейтинг 5.0 на Яндекс. Работаем ежедневно 10:00-21:00.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Автосервис Автокейс в Токсово",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Автосервис Автокейс в Токсово",
        description: "Качественный ремонт автомобилей в Токсово. Шиномонтаж, развал-схождение, диагностика. Рейтинг 5.0 ⭐",
        images: ["/og-image.jpg"],
    },

    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION || 'rf9inF_5gko5ae3NAXJwcTgfI7oHVmSUhBag518uo-0',
        yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
    },

    // Альтернативные ссылки
    alternates: {
        canonical: "https://avtoservis-toksovo.ru",
    },

    // Категория
    category: "Автосервис",

    // Другие мета-теги
    other: {
        "geo.region": "RU-LEN",
        "geo.placename": "Токсово",
        "geo.position": "60.137273;30.527862",
        "ICBM": "60.137273, 30.527862",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // Структурированные данные JSON-LD для автосервиса
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://avtoservis-toksovo.ru/#autorepair",
        "name": "Автокейс",
        "alternateName": "Avtokeys",
        "description": "Автосервис в Токсово — профессиональный ремонт автомобилей всех марок с 2014 года. Шиномонтаж, развал-схождение, диагностика, ремонт двигателя, заправка кондиционеров. Обслуживаем Токсово, Мурино, Девяткино, Кузьмолово и Санкт-Петербург.",
        "url": "https://avtoservis-toksovo.ru",
        "telephone": "+7-968-195-10-71",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ленинградское шоссе, 13А",
            "addressLocality": "Токсово",
            "addressRegion": "Ленинградская область",
            "postalCode": "188664",
            "addressCountry": "RU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 60.137273,
            "longitude": 30.527862
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "10:00",
            "closes": "21:00"
        },
        "priceRange": "₽₽",
        "currenciesAccepted": "RUB",
        "paymentAccepted": "Наличные, Карты",
        "areaServed": [
            { "@type": "City", "name": "Токсово" },
            { "@type": "City", "name": "Мурино" },
            { "@type": "City", "name": "Девяткино" },
            { "@type": "City", "name": "Кузьмолово" },
            { "@type": "City", "name": "Санкт-Петербург" }
        ],
        "image": "https://avtoservis-toksovo.ru/og-image.jpg",
        "sameAs": [
            "https://vk.com/avtokeis",
            "https://yandex.ru/maps/org/avtokeys/56867349266"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги автосервиса",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Шиномонтаж",
                        "description": "Сезонная замена, ремонт и балансировка шин для колёс до 26 дюймов"
                    },
                    "price": tireStartingPrice,
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Развал-схождение — 1 ось, легковой автомобиль",
                        "description": "Регулировка углов установки колёс на 4-х стоечном подъёмнике с компьютерной диагностикой"
                    },
                    "price": alignmentStartingPrice,
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Компьютерная диагностика",
                        "description": "Полная компьютерная диагностика всех систем автомобиля"
                    },
                    "price": otherPrices.diagnostics,
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Диагностика кондиционера",
                        "description": "Диагностика кондиционера; хладагент и заправка рассчитываются отдельно"
                    },
                    "price": airConditioningPrices[0].price,
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ремонт двигателя",
                        "description": "Капитальный и частичный ремонт бензиновых и дизельных двигателей"
                    },
                    "price": otherPrices.engine,
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Аргонно-дуговая сварка",
                        "description": "Сварка аргоном деталей из алюминия, нержавеющей стали и других металлов"
                    }
                }
            ]
        }
    };

    return (
        <html lang="ru" className={`${unbounded.variable} ${montserrat.variable}`}>
        <head>
            {/* JSON-LD структурированные данные */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* BreadcrumbList и LocalBusiness удалены: breadcrumbs указывали на фрагменты, LocalBusiness дублировал AutoRepair */}

            {/* Дополнительные мета-теги */}
            <meta name="format-detection" content="telephone=yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="#b62426" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

            {/* Яндекс Метрика */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

                        ym(106768288,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
                    `,
                }}
            />
        </head>
        <body>
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/106768288" style={{ position: 'absolute', left: '-9999px' }} alt="" />
            </div>
        </noscript>
        {children}
        <Suspense fallback={null}>
            <YandexMetrika />
        </Suspense>
        </body>
        </html>
    );
}
