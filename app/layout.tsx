import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika";

export const metadata: Metadata = {
    // Основные мета-теги
    title: "Автосервис Автокейс в Токсово — Ремонт авто, шиномонтаж, развал-схождение",
    description: "Автосервис Автокейс в Токсово (Ленинградская область). Ремонт автомобилей любой сложности: шиномонтаж от 1400₽, развал-схождение, диагностика, ремонт двигателя. Работаем ежедневно 10:00-21:00. ☎ +7 (911) 014-17-51",

    // Ключевые слова
    keywords: [
        "автосервис токсово",
        "автосервис мурино",
        "автосервис девяткино",
        "ремонт авто токсово",
        "шиномонтаж токсово",
        "развал схождение токсово",
        "автосервис ленинградская область",
        "ремонт двигателя токсово",
        "диагностика авто токсово",
        "замена масла токсово",
        "ремонт подвески токсово",
        "заправка кондиционера авто токсово",
        "автосервис всеволожский район",
        "СТО токсово",
        "автомастерская токсово",
        "ремонт автомобилей недорого",
        "автокейс",
        "avtokeys"
    ].join(", "),

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
        description: "Качественный ремонт автомобилей в Токсово. Шиномонтаж, развал-схождение, диагностика, ремонт двигателя. Рейтинг 4.9 на Яндекс. Работаем ежедневно 10:00-21:00.",
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
        description: "Качественный ремонт автомобилей в Токсово. Шиномонтаж, развал-схождение, диагностика. Рейтинг 4.9 ⭐",
        images: ["/og-image.jpg"],
    },

    // Верификация (замените на свои коды после регистрации)
    // verification: {
    //   yandex: "ваш_код_верификации_яндекс",
    //   google: "ваш_код_верификации_google",
    // },

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
        "name": "Автокейс",
        "alternateName": "Avtokeys",
        "description": "Автосервис в Токсово. Ремонт автомобилей любой сложности: шиномонтаж, развал-схождение, диагностика, ремонт двигателя, заправка кондиционеров.",
        "url": "https://avtoservis-toksovo.ru",
        "telephone": "+7-911-014-17-51",
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        },
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
                        "description": "Шиномонтаж колес до 26 дюймов"
                    },
                    "price": "1400",
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Развал-схождение",
                        "description": "Развал-схождение на 4-х стоечном подъёмнике"
                    },
                    "price": "1000",
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Компьютерная диагностика",
                        "description": "Полная компьютерная диагностика автомобиля"
                    },
                    "price": "1500",
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Заправка кондиционера",
                        "description": "Заправка автомобильного кондиционера"
                    },
                    "price": "1500",
                    "priceCurrency": "RUB"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ремонт двигателя",
                        "description": "Капитальный ремонт двигателя"
                    },
                    "price": "35000",
                    "priceCurrency": "RUB"
                }
            ]
        }
    };

    // Хлебные крошки для SEO
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://avtoservis-toksovo.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Услуги",
                "item": "https://avtoservis-toksovo.ru/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Цены",
                "item": "https://avtoservis-toksovo.ru/#prices"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Отзывы",
                "item": "https://avtoservis-toksovo.ru/#reviews"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Контакты",
                "item": "https://avtoservis-toksovo.ru/#contacts"
            }
        ]
    };

    // Локальный бизнес для карт
    const localBusinessJsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Автокейс",
        "image": "https://avtoservis-toksovo.ru/og-image.jpg",
        "@id": "https://avtoservis-toksovo.ru",
        "url": "https://avtoservis-toksovo.ru",
        "telephone": "+7-911-014-17-51",
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
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "10:00",
            "closes": "21:00"
        },
        "areaServed": [
            { "@type": "City", "name": "Токсово" },
            { "@type": "City", "name": "Мурино" },
            { "@type": "City", "name": "Девяткино" },
            { "@type": "City", "name": "Кузьмолово" },
            { "@type": "City", "name": "Санкт-Петербург" }
        ]
    };

    return (
        <html lang="ru">
        <head>
            {/* JSON-LD структурированные данные */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />

            {/* Дополнительные мета-теги */}
            <meta name="format-detection" content="telephone=yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="#b62426" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

            {/* Preconnect для ускорения загрузки */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body>
        {children}
        <Suspense fallback={null}>
            <YandexMetrika />
        </Suspense>
        </body>
        </html>
    );
}