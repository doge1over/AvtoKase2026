import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/ServicePage.module.css';
import { tireStartingPrice, alignmentStartingPrice, airConditioningStartingPrice, otherPrices, formatPrice } from '../servicePrices';

const title = 'Услуги и цены автосервиса в Токсово';
const description = `Услуги Автокейс: шиномонтаж от ${formatPrice(tireStartingPrice)}, сход-развал, компьютерная диагностика и ремонт двигателя. Выберите услугу, посмотрите прайс и запишитесь. Токсово, Ленинградское шоссе, 13А.`;
const url = 'https://avtoservis-toksovo.ru/uslugi';

export const metadata: Metadata = {
    title: `${title} | Автокейс`, description,
    alternates: { canonical: '/uslugi' },
    openGraph: { title, description, url: '/uslugi', images: ['/gallery/IMG_6728 1.webp'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/gallery/IMG_6728 1.webp'] },
};

const services = [
    { href: '/shinomontazh', title: 'Шиномонтаж', price: tireStartingPrice, unit: 'Комплекс R13 для легкового автомобиля, 4 колеса', description: 'Сезонная смена шин, балансировка и ремонт. На странице — цены R13–R20+ для легковых автомобилей, внедорожников, SUV и микроавтобусов.' },
    { href: '/razval-shozhdenie', title: 'Развал-схождение', price: alignmentStartingPrice, unit: 'Одна ось легкового автомобиля', description: 'Регулировка углов установки колёс. Отдельные цены для одной и двух осей, кроссоверов, внедорожников, микроавтобусов и автомобилей с пневмоподвеской.' },
    { href: '/diagnostika', title: 'Компьютерная диагностика', price: otherPrices.diagnostics, unit: 'По согласованному объёму проверки', description: 'Проверка при появлении ошибок и изменении работы автомобиля. При записи сообщите симптомы и уточните состав диагностики.' },
    { href: '/remont-dvigatelya', title: 'Ремонт двигателя', price: otherPrices.engine, unit: 'По согласованному объёму ремонта', description: 'Частичный и капитальный ремонт бензиновых и дизельных двигателей. Перечень работ, детали и итоговая стоимость согласуются после осмотра.' },
    { href: '/zapravka-kondicionera', title: 'Заправка кондиционера', price: airConditioningStartingPrice, unit: 'По составу работ и объёму хладагента', description: 'Диагностика кондиционера и заправка. На странице приведены отдельные цены проверки и хладагента с указанием объёма.' },
    { href: '/argonnaya-svarka', title: 'Аргонная сварка', price: null, unit: 'По оценке конкретной детали', description: 'Обсуждение сварки алюминиевых и других металлических деталей. Возможность ремонта, подготовка и стоимость согласуются после оценки.' },
    { href: '/avtozapchasti', title: 'Магазин автозапчастей', price: null, unit: 'Уточните наличие и производителя', description: 'Подбор запчастей при автосервисе. Подготовьте VIN или артикул и уточните стоимость, совместимость и срок получения по телефону.' },
];

export default function Page() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            { '@type': 'CollectionPage', '@id': url, url, name: title, description, mainEntity: { '@id': `${url}#list` } },
            { '@type': 'ItemList', '@id': `${url}#list`, itemListElement: services.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.title, url: `https://avtoservis-toksovo.ru${item.href}` })) },
            { '@type': 'BreadcrumbList', itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Автокейс', item: 'https://avtoservis-toksovo.ru/' },
                { '@type': 'ListItem', position: 2, name: 'Услуги и цены', item: url },
            ] },
        ],
    };
    return <div className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <header className={styles.header}>
            <Link href="/" className={styles.brand}>АВТОКЕЙС</Link>
            <a href="tel:+79681951071">+7 (968) 195-10-71</a>
        </header>
        <main className={styles.main}>
            <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}><Link href="/">Главная</Link> / <span>Услуги и цены</span></nav>
            <section className={styles.hero}>
                <div>
                    <p className={styles.eyebrow}>АВТОКЕЙС · ТОКСОВО</p>
                    <h1>{title}</h1>
                    <p>Выберите услугу, чтобы посмотреть цены, условия и порядок записи. Автосервис находится на Ленинградском шоссе, 13А и работает ежедневно с 10:00 до 21:00.</p>
                    <div className={styles.links}><a href="tel:+79681951071" className={styles.button}>Обсудить работы и записаться</a><Link href="/gallery">Фотографии автосервиса →</Link></div>
                </div>
                <Image src="/gallery/IMG_6728 1.webp" alt="Ремонтная зона автосервиса Автокейс с подъёмниками" width={900} height={700} sizes="(max-width: 767px) calc(100vw - 32px), 45vw" className={styles.image} priority />
            </section>
            <div className={styles.columns}>
                {services.map(service => <Link href={service.href} className={`${styles.panel} ${styles.serviceCardLink}`} key={service.href} aria-label={`${service.title}: цены и запись`}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <p className={styles.price}>{service.price === null ? 'По запросу' : `от ${formatPrice(service.price)}`}</p>
                    <p className={styles.note}>{service.unit}</p>
                    <span className={styles.source}>{service.title}: цены и запись →</span>
                </Link>)}
            </div>
            <section className={styles.section}>
                <h2>Другие услуги автосервиса</h2>
                <p>На главной странице также представлены обслуживание подвески и тормозной системы и замена масла. Возможность выполнения работ для вашей модели автомобиля уточните по телефону.</p>
                <div className={styles.links}><Link href="/#prices">Основной прайс автосервиса →</Link><Link href="/#services">Все направления обслуживания →</Link></div>
            </section>
            <section className={styles.panel}>
                <h2>Как выбрать нужную услугу</h2>
                <p>Планируете поездку из Девяткино? <Link href="/iz-devyatkino" className={styles.source}>Маршрут, цены и подготовка к визиту →</Link></p>
                <p>Если причина неисправности неизвестна, опишите мастеру симптомы, модель автомобиля и недавние работы. Перед визитом согласуйте, какая проверка нужна, что входит в цену и когда можно приехать.</p>
                <div className={styles.links}><a className={styles.button} href="tel:+79681951071">+7 (968) 195-10-71</a><Link href="/#contacts">Адрес и карта проезда →</Link></div>
            </section>
        </main>
        <footer className={styles.footer}>Автокейс · Токсово · Ленинградское шоссе, 13А</footer>
    </div>;
}
