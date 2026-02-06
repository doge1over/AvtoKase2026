import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Автокейс — Автосервис в Токсово",
    description: "Качественный ремонт автомобилей в Токсово. Шиномонтаж, диагностика, ремонт двигателя, развал-схождение. Профессиональный подход и честные цены. Рейтинг 4.9 на Яндекс.",
    keywords: "Автосервис Токсово, Автосервис Мурино, Автосервис Девяткино, Ремонт ходовой, Ремонт двигателя, Диагностика авто, Шиномонтаж",
    openGraph: {
        title: "Автокейс — Автосервис в Токсово",
        description: "Качественный ремонт автомобилей в Токсово. Профессиональный подход и честные цены.",
        url: "https://avtoservis-toksovo.ru",
        siteName: "Автокейс",
        locale: "ru_RU",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>{children}</body>
        </html>
    );
}