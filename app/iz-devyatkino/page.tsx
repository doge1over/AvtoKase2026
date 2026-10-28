import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/ServicePage.module.css';
import { tireStartingPrice, alignmentStartingPrice, airConditioningStartingPrice, otherPrices, formatPrice } from '../servicePrices';

const title = 'Автосервис для жителей Девяткино — в Токсово';
const description = 'Автокейс в Токсово: как приехать из Девяткино и Нового Девяткино, цены на шиномонтаж и развал-схождение, запись на ремонт. Ленинградское шоссе, 13А.';
const url = 'https://avtoservis-toksovo.ru/iz-devyatkino';
const route = 'https://yandex.ru/maps/?rtext=~60.137273%2C30.527862&rtt=auto';

export const metadata: Metadata = {
    title: 'Автосервис для жителей Девяткино | Автокейс в Токсово', description,
    alternates: { canonical: '/iz-devyatkino' },
    openGraph: { title, description, url, images: ['/gallery/IMG_7240 1.webp'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/gallery/IMG_7240 1.webp'] },
};

const services = [
    { href: '/shinomontazh', title: 'Шиномонтаж', price: tireStartingPrice, text: 'Начальная цена комплекса для легкового автомобиля R13 за 4 колеса. Для другого диаметра и класса автомобиля смотрите полный прайс.' },
    { href: '/razval-shozhdenie', title: 'Развал-схождение', price: alignmentStartingPrice, text: 'Начальная цена регулировки одной оси легкового автомобиля. На странице услуги есть цены для двух осей, кроссоверов и внедорожников.' },
    { href: '/diagnostika', title: 'Компьютерная диагностика', price: otherPrices.diagnostics, text: 'Перед поездкой сообщите модель автомобиля, симптомы и сообщения на панели. Состав проверки и стоимость уточните при записи.' },
    { href: '/zapravka-kondicionera', title: 'Заправка кондиционера', price: airConditioningStartingPrice, text: 'Итоговая стоимость зависит от состава работ и объёма хладагента. На странице услуги отдельно указаны цены диагностики и фреона.' },
];
const questions = [
    { question: 'Вы находитесь в Девяткино?', answer: 'Автокейс находится в Токсово, на Ленинградском шоссе, 13А. Эта страница помогает жителям Девяткино и Нового Девяткино спланировать визит в наш автосервис.' },
    { question: 'Сколько ехать из Девяткино?', answer: 'В среднем дорога на автомобиле занимает 15–20 минут. Время зависит от точки выезда и пробок. Откройте маршрут в Яндекс Картах и укажите свой адрес или станцию метро Девяткино: карта покажет варианты дороги и текущее время в пути.' },
    { question: 'Можно ли заранее узнать итоговую цену?', answer: 'По телефону можно уточнить тариф и состав услуги для вашего автомобиля. При неизвестной причине неисправности окончательный объём ремонта и стоимость согласуются после диагностики.' },
    { question: 'Что подготовить для подбора запчастей?', answer: 'Подготовьте VIN автомобиля или артикул детали. До поездки уточните совместимость, наличие, стоимость и срок получения в магазине при сервисе.' },
];

export default function Page() {
    const schema = { '@context': 'https://schema.org', '@graph': [
        { '@type': 'WebPage', '@id': url, url, name: title, description, about: { '@id': 'https://avtoservis-toksovo.ru/#autorepair' } },
        { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://avtoservis-toksovo.ru/' },
            { '@type': 'ListItem', position: 2, name: 'Из Девяткино', item: url },
        ] },
    ] };
    return <div className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <header className={styles.header}><Link href="/" className={styles.brand}>АВТОКЕЙС</Link><a href="tel:+79681951071">+7 (968) 195-10-71</a></header>
        <main className={styles.main}>
            <nav className={styles.breadcrumbs} aria-label="Хлебные крошки"><Link href="/">Главная</Link> / <span>Из Девяткино</span></nav>
            <section className={styles.hero}>
                <div>
                    <p className={styles.eyebrow}>АВТОКЕЙС · ЛЕНИНГРАДСКОЕ ШОССЕ, 13А</p>
                    <h1>{title}</h1>
                    <p>Планируете ремонт автомобиля и рассматриваете сервис за пределами Девяткино? В Автокейсе в Токсово доступны шиномонтаж, развал-схождение, диагностика и ремонт двигателя. Здесь можно выбрать услугу, проверить цены и подготовиться к поездке.</p>
                    <p>Работаем ежедневно с 10:00 до 21:00. Перед выездом позвоните, чтобы согласовать время приёма и необходимые работы.</p>
                    <div className={styles.links}><a href="tel:+79681951071" className={styles.button}>Позвонить и записаться</a><a href="#route">Как приехать →</a></div>
                </div>
                <Image src="/gallery/IMG_7240 1.webp" alt="Здание автосервиса Автокейс в Токсово и автомобили у въезда" width={900} height={700} sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1280px) 45vw, 584px" className={styles.image} priority />
            </section>
            <section className={styles.section} id="route">
                <h2>Как доехать из Девяткино и Нового Девяткино</h2>
                <p>Адрес назначения: <strong>Токсово, Ленинградское шоссе, 13А</strong>. В среднем дорога из Девяткино на автомобиле занимает <strong>15–20 минут</strong>. Откройте автомобильный маршрут и в поле отправления укажите свой адрес в Девяткино, Новом Девяткино или станцию метро Девяткино. Проверьте время в пути перед выездом: оно зависит от точки отправления и пробок.</p>
                <div className={styles.links}><a href={route} className={styles.button} target="_blank" rel="noopener noreferrer">Построить маршрут в Яндекс Картах ↗</a><a href="https://yandex.ru/maps/org/avtokeys/56867349266/" target="_blank" rel="noopener noreferrer">Карточка автосервиса ↗</a></div>
                <p className={styles.note}>На фотографии выше — здание сервиса. Если нужны ориентиры для въезда или место парковки, уточните их по телефону при записи.</p>
            </section>
            <section className={styles.section}>
                <h2>Услуги и цены перед поездкой</h2>
                <div className={styles.columns}>{services.map(service => <Link key={service.href} href={service.href} className={`${styles.panel} ${styles.serviceCardLink}`}>
                    <h3>{service.title}</h3><p className={styles.price}>от {formatPrice(service.price)}</p><p>{service.text}</p><span className={styles.source}>Подробные цены и запись →</span>
                </Link>)}</div>
                <p className={styles.note}>Начальные цены относятся к указанному объёму услуги. Уточните итоговую стоимость для вашей модели и выбранных работ до визита.</p>
                <div className={styles.links}><Link href="/remont-dvigatelya">Ремонт двигателя →</Link><Link href="/avtozapchasti">Подбор автозапчастей →</Link><Link href="/uslugi">Все услуги и цены →</Link></div>
            </section>
            <section className={styles.panel}>
                <h2>Что согласовать до выезда</h2>
                <ol className={styles.checklist}>
                    <li>Сообщите марку, модель, год выпуска и причину обращения. Для шиномонтажа — размер колёс и класс автомобиля.</li>
                    <li>Уточните доступное время приёма, состав работ и ориентировочную продолжительность. Если нужны детали, заранее проверьте их наличие.</li>
                    <li>Обсудите, можно ли дождаться окончания работ или потребуется оставить автомобиль. После этого спланируйте обратную дорогу.</li>
                </ol>
                <div className={styles.links}><a className={styles.button} href="tel:+79681951071">+7 (968) 195-10-71</a><Link href="/gallery">Посмотреть фотографии сервиса →</Link></div>
            </section>
            <section className={styles.section}><h2>Вопросы перед визитом</h2>{questions.map(item => <details key={item.question} className={styles.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
        </main>
        <footer className={styles.footer}>Автокейс · Токсово, Ленинградское шоссе, 13А · Ежедневно 10:00–21:00</footer>
    </div>;
}
