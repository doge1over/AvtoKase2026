import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { PhoneIcon, ClockIcon, MapPinIcon, GiftIcon, StarIcon, ArrowRightIcon } from './components/Icons';
import ServiceCards from './components/ServiceCards';
import { galleryPreview as galleryImages } from './galleryImages';
import { tireStartingPrice, alignmentStartingPrice, airConditioningStartingPrice, otherPrices, formatPrice } from './servicePrices';
import { serviceNavigation } from './serviceNavigation';

const services = [
    { id: '01', href: '/shinomontazh', title: 'Шиномонтаж', desc: 'Сезонная замена, ремонт и балансировка шин для колёс до 26 дюймов. Используем современное оборудование для точной балансировки и бережного монтажа. Пакеты для хранения шин — бесплатно.', price: `от ${formatPrice(tireStartingPrice)}` },
    { id: '02', href: '/zapravka-kondicionera', title: 'Заправка кондиционеров', desc: 'Диагностика и заправка автокондиционеров на автоматической заправочной станции. Проверяем герметичность системы, определяем утечки и заправляем фреоном с точностью до грамма.', price: `от ${formatPrice(airConditioningStartingPrice)}` },
    { id: '03', href: '/avtozapchasti', title: 'Магазин запчастей', desc: 'Собственный магазин автозапчастей при сервисе. Подбор оригинальных и аналоговых деталей для большинства марок. Нужная запчасть всегда под рукой — сокращаем время ремонта.', price: '—' },
    { id: '04', href: '/razval-shozhdenie', title: 'Развал-схождение', desc: 'Регулировка углов установки колёс на 4-х стоечном подъёмнике с компьютерной диагностикой. Устраняем неравномерный износ шин и улучшаем управляемость автомобиля.', price: `от ${formatPrice(alignmentStartingPrice)}` },
    { id: '05', href: '/remont-dvigatelya', title: 'Ремонт двигателя', desc: 'Капитальный и частичный ремонт двигателей любой сложности. Диагностика, замена ГРМ, прокладок, поршневой группы. Работаем с бензиновыми и дизельными моторами всех марок.', price: `от ${formatPrice(otherPrices.engine)}` },
    { id: '06', href: '/argonnaya-svarka', title: 'Аргонно-дуговая сварка', desc: 'Сварка аргоном деталей из алюминия, нержавеющей стали и других металлов. Ремонт радиаторов, впускных коллекторов, поддонов картера и других элементов автомобиля.', price: 'договорная' },
];

const priceList: { service: string; price: string; href?: string }[] = [
    { service: 'Ремонт топливной системы', price: `от ${formatPrice(otherPrices.fuel)}` },
    { service: 'Обслуживание подвески', price: `от ${formatPrice(otherPrices.suspension)}` },
    { service: 'Обслуживание тормозной системы', price: `от ${formatPrice(otherPrices.brakes)}` },
    { service: 'Замена жидкостей (масла)', price: `от ${formatPrice(otherPrices.oil)}` },
    { service: 'Компьютерная диагностика', price: `от ${formatPrice(otherPrices.diagnostics)}`, href: '/diagnostika' },
    { service: 'Сезонная смена шин', price: `от ${formatPrice(tireStartingPrice)}`, href: '/shinomontazh' },
    { service: 'Ремонт всех видов шин', price: `от ${formatPrice(otherPrices.tireRepair)}` },
    { service: 'Компьютерная балансировка', price: `от ${formatPrice(otherPrices.balancing)}` },
    { service: 'Сход-развал', price: `от ${formatPrice(alignmentStartingPrice)}`, href: '/razval-shozhdenie' },
];

const reviews = [
    {
        name: 'Ольга Ольга',
        date: '29 июля 2025',
        text: 'Все очень понравилось. Ребята быстро определили неполадку в машине и устранили ее. Промыли радиатор.',
        car: 'Отзыв в Яндекс Картах',
    },
    {
        name: 'Анастасия',
        date: '23 января 2025',
        text: 'Быстрый и отличный сервис. Грамотно сделали ТО. Высококачественные специалисты!!! Я очень довольна выполненной работой.',
        car: 'Отзыв в Яндекс Картах',
    },
    {
        name: '651735 Смирнова',
        date: '27 октября 2025',
        text: 'Хороший вежливый персонал, машину сделали быстро. Скорее всего буду обращаться в этот сервис.',
        car: 'Отзыв в Яндекс Картах',
    },
];
const faqItems = [
    {
        question: 'Сколько стоит шиномонтаж в Токсово?',
        answer: `Шиномонтажный комплекс для легкового автомобиля R13 стоит ${formatPrice(tireStartingPrice)} за четыре колеса. Стоимость для других диаметров и категорий автомобилей указана на странице шиномонтажа. Ремонт прокола и отдельная балансировка рассчитываются отдельно.`,
    },
    {
        question: 'Нужна ли предварительная запись?',
        answer: 'Предварительная запись желательна, но не обязательна. Мы принимаем клиентов и без записи при наличии свободных мест. Для записи позвоните по телефону +7 (968) 195-10-71. Работаем ежедневно с 10:00 до 21:00.',
    },
    {
        question: 'Какие марки автомобилей вы обслуживаете?',
        answer: 'Автосервис Автокейс обслуживает автомобили всех марок: отечественные (ВАЗ, ГАЗ), японские (Toyota, Honda, Nissan, Mazda), корейские (Kia, Hyundai), немецкие (BMW, Mercedes, Volkswagen, Audi), французские (Renault, Peugeot) и другие. Работаем как с бензиновыми, так и с дизельными двигателями.',
    },
    {
        question: 'Где находится автосервис Автокейс?',
        answer: 'Автосервис расположен по адресу: Ленинградское шоссе, 13А, Токсово, Ленинградская область, 188664. До нас удобно добраться из Мурино, Девяткино, Кузьмолово и северных районов Санкт-Петербурга. Есть удобная парковка рядом с сервисом.',
    },
    {
        question: 'Какие гарантии вы предоставляете?',
        answer: 'На все выполненные работы мы предоставляем гарантию. Срок гарантии зависит от вида работ: на шиномонтаж и балансировку — 1 месяц, на ремонт подвески — до 3 месяцев, на ремонт двигателя — до 6 месяцев. Используем только качественные запчасти от проверенных поставщиков.',
    },
];

const navItems = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/uslugi' },
    { name: 'Цены', href: '/#prices' },
    { name: 'Отзывы', href: '/#reviews' },
    { name: 'Галерея', href: '/gallery' },
    { name: 'Контакты', href: '/#contacts' },
];

function renderStars(rating: number) {
    return Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
            <StarIcon filled={i < rating} />
        </span>
    ));
}

export default function Home() {
    return (
        <div className={styles.wrapper}>
            {/* Header */}
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>АК</div>
                    <div>
                        <div className={styles.logoTitle}>АВТОКЕЙС</div>
                        <div className={styles.logoSubtitle}>Автосервис</div>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    {navItems.map((item, i) => (
                        <Link key={i} href={item.href} className={styles.navLink}>{item.name}</Link>
                    ))}
                </nav>

                <div className={styles.headerRight}>
                    <div className={styles.headerContact}>
                        <div className={styles.workTime}>
                            <ClockIcon /> 10:00 — 21:00
                        </div>
                        <a href="tel:+79681951071" className={styles.phone}>
                            +7 (968) 195-10-71
                        </a>
                    </div>
                    <a href="tel:+79681951071" className={styles.btnPrimary}>
                        <PhoneIcon /> ЗАПИСАТЬСЯ
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroGlow} />
                <div className={styles.heroDecor} />

                <div className={styles.heroContent}>
                    <div className={`${styles.heroLocation} ${styles.animateSlideIn}`}>
                        <MapPinIcon /> ТОКСОВО • ЛЕН. ОБЛАСТЬ • Ленинградское ш. 13А
                    </div>

                    <h1 className={styles.heroTitle}>
                        АВТОСЕРВИС<br />
                        <span className={styles.heroTitleAccent}>АВТОКЕЙС</span>
                        <span className={styles.heroTitleRegion}>В ТОКСОВО</span>
                    </h1>

                    <p className={`${styles.heroDesc} ${styles.animateSlideUp}`}>
                        Профессиональный ремонт автомобилей в Токсово с 2014 года.
                        Шиномонтаж, развал-схождение, диагностика и ремонт двигателя.
                        Обслуживаем жителей Токсово, Мурино, Девяткино и Кузьмолово.
                    </p>

                    <div className={`${styles.heroButtons} ${styles.animateSlideUp}`}>
                        <a href="tel:+79681951071" className={styles.btnPrimary}>
                            ЗАПИСАТЬСЯ НА СЕРВИС <ArrowRightIcon />
                        </a>
                        <Link href="/gallery" prefetch={false} className={styles.btnSecondary}>
                            НАШИ РАБОТЫ
                        </Link>
                    </div>
                </div>

                <div className={styles.heroStats}>
                    {[
                        { num: '10+', label: 'Лет опыта' },
                        { num: '5000+', label: 'Клиентов' },
                        { num: '5.0', label: 'Рейтинг' },
                    ].map((stat, i) => (
                        <div key={i} className={`${styles.statItem} ${styles.animateFadeIn}`}>
                            <div className={styles.statNum}>{stat.num}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={styles.services}>
                <div className={styles.servicesBigNum}>01</div>

                <div className={styles.servicesContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionLabel}>УСЛУГИ</h2>
                        <h3 className={styles.sectionTitle}>Услуги автосервиса в Токсово</h3>
                    </div>

                    <ServiceCards services={services} />
                    <nav className={styles.serviceNavigation} aria-label="Страницы услуг">
                        {serviceNavigation.map(item => <Link key={item.href} href={item.href}>{item.title} →</Link>)}
                    </nav>
                </div>
            </section>

            {/* Price Section */}
            <section id="prices" className={styles.priceSection}>
                <div className={styles.priceContainer}>
                    <div className={styles.priceGrid}>
                        <div>
                            <h2 className={styles.sectionLabel}>ПРАЙС-ЛИСТ</h2>
                            <h3 className={styles.sectionTitle}>Цены на услуги</h3>
                            <p className={styles.priceNote}>
                                Все цены указаны примерно. Наш сервис работает по нормо-часам.
                                Точную стоимость ремонта мастер определит после осмотра автомобиля.
                                Консультации входят в стоимость.
                            </p>
                            <div className={styles.freeTag}>
                                <GiftIcon />
                                <span>Пакеты для шин — <strong>БЕСПЛАТНО</strong></span>
                            </div>
                        </div>

                        <div>
                            {priceList.map((item, i) => (
                                <div key={i} className={styles.priceRow}>
                                    {item.href ? <Link href={item.href} className={styles.priceService}>{item.service} ↗</Link> : <span className={styles.priceService}>{item.service}</span>}
                                    <span className={styles.priceValue}>{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className={styles.reviewsSection}>
                <div className={styles.reviewsContainer}>
                    <div className={styles.reviewsHeader}>
                        <div>
                            <h2 className={styles.sectionLabel}>ОТЗЫВЫ</h2>
                            <h3 className={styles.sectionTitle}>Что говорят клиенты</h3>
                        </div>

                        <div className={styles.yandexRating}>
                            <div className={styles.yandexLogo}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FC3F1D">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.256 17.996h-2.15V6.004h2.15c2.858 0 4.19 1.297 4.19 3.64 0 1.7-.792 2.878-2.253 3.467l2.72 4.885h-2.39l-2.385-4.475h-.882v4.475zm0-6.387c1.463 0 2.15-.67 2.15-1.958 0-1.288-.687-1.958-2.15-1.958h-.882v3.916h.882z"/>
                                </svg>
                                <span>Яндекс</span>
                            </div>
                            <div className={styles.ratingBig}>
                                <span className={styles.ratingNumber}>5.0</span>
                                <div className={styles.ratingStars}>
                                    {renderStars(5)}
                                </div>
                                <span className={styles.ratingCount}>149 оценок</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reviewsGrid}>
                        {reviews.map((review, i) => (
                            <div key={i} className={styles.reviewCard}>
                                <div className={styles.reviewHeader}>
                                    <div className={styles.reviewAvatar}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className={styles.reviewInfo}>
                                        <div className={styles.reviewName}>{review.name}</div>
                                        <div className={styles.reviewCar}>{review.car}</div>
                                    </div>
                                    <div className={styles.reviewDate}>{review.date}</div>
                                </div>
                                <div className={styles.reviewStars}>
                                    <a href="https://yandex.ru/maps/org/avtokeys/56867349266/reviews/" target="_blank" rel="noopener noreferrer">Читать в Яндексе ↗</a>
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.reviewsCta}>
                        <a
                            href="https://yandex.ru/maps/org/avtokeys/56867349266/reviews/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnSecondary}
                        >
                            Смотреть все отзывы на Яндекс
                            <ArrowRightIcon />
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className={styles.gallery}>
                <div className={styles.galleryHeader}>
                    <h2 className={styles.sectionLabel}>ГАЛЕРЕЯ</h2>
                    <h3 className={styles.sectionTitle}>Наши работы</h3>
                </div>

                <div className={styles.galleryGrid}>
                    {galleryImages.map((img, i) => (
                        <div key={i} className={styles.galleryItem}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={600}
                                sizes="(max-width: 767px) 50vw, 25vw"
                                quality={80}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhA//aAAwDAQACEQMRAD8AzoW9tLcwyXEaySwqVR2UEoCckA/BnvFVNO2/ptvbRxrYWrBVC5khViT9JJG5P0mlKECnsU9LbZ//2Q=="
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.galleryCta}>
                    <Link href="/gallery" className={styles.btnPrimary}>
                        СМОТРЕТЬ ВСЕ РАБОТЫ <ArrowRightIcon />
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.faqContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionLabel}>ВОПРОСЫ И ОТВЕТЫ</h2>
                        <h3 className={styles.sectionTitle}>Часто задаваемые вопросы</h3>
                    </div>

                    <div className={styles.faqList}>
                        {faqItems.map((item, i) => (
                            <div key={i} className={styles.faqItem}>
                                <h4 className={styles.faqQuestion}>{item.question}</h4>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.ctaGlow} />
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Проблема с автомобилем?</h2>
                    <p className={styles.ctaDesc}>
                        Мы поможем! Звоните прямо сейчас или записывайтесь онлайн.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="tel:+79681951071" className={styles.ctaBtnWhite}>
                            <PhoneIcon /> +7 (968) 195-10-71
                        </a>
                        <a href="https://vk.com/avtokeis" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnOutline}>
                            VK ГРУППА
                        </a>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="contacts" className={styles.mapSection}>
                <div className={styles.mapViewport}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=56867349266"
                        className={styles.map}
                        title="Автосервис Автокейс на карте Токсово"
                        loading="lazy"
                    />
                </div>
                <div className={styles.mapCard}>
                    <h3 className={styles.mapCardTitle}>Как нас найти</h3>
                    <Link href="/iz-devyatkino" className={styles.footerLink}>Как приехать из Девяткино →</Link>
                    <div className={styles.mapCardItem}>
                        <MapPinIcon /> Токсово, Ленинградская область, Ленинградское шоссе, 13А
                    </div>
                    <div className={styles.mapCardItem}>
                        <ClockIcon /> 10:00 — 21:00 ежедневно
                    </div>
                    <div className={styles.mapCardItem}>
                        <PhoneIcon /> +7 (968) 195-10-71
                    </div>
                    <a href="https://yandex.ru/maps/org/avtokeys/56867349266/?ll=30.527862%2C60.137273&z=17" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                        ПОСТРОИТЬ МАРШРУТ <ArrowRightIcon />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerGrid}>
                    <div>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>АК</div>
                            <div>
                                <div className={styles.logoTitle}>АВТОКЕЙС</div>
                                <div className={styles.logoSubtitle}>Автосервис</div>
                            </div>
                        </Link>
                        <p className={styles.footerDesc}>
                            Автосервис Автокейс — качественный ремонт автомобилей в Токсово.
                            Профессиональный подход, честные цены и гарантия на все работы.
                            Обслуживаем Токсово, Мурино, Девяткино, Кузьмолово и СПб.
                        </p>
                    </div>

                    <div>
                        <h5 className={styles.footerTitle}>НАВИГАЦИЯ</h5>
                        {navItems.map((item, i) => (
                            <Link key={i} href={item.href} className={styles.footerLink}>{item.name}</Link>
                        ))}
                    </div>

                    <div>
                        <h5 className={styles.footerTitle}>УСЛУГИ</h5>
                        {[
                            { name: 'Шиномонтаж', href: '/shinomontazh' },
                            { name: 'Развал-схождение', href: '/razval-shozhdenie' },
                            { name: 'Диагностика', href: '/diagnostika' },
                            { name: 'Ремонт двигателя', href: '/remont-dvigatelya' },
                            { name: 'Заправка кондиционера', href: '/zapravka-kondicionera' },
                            { name: 'Аргонная сварка', href: '/argonnaya-svarka' },
                            { name: 'Магазин запчастей', href: '/avtozapchasti' },
                        ].map((item, i) => (
                            <Link key={i} href={item.href} className={styles.footerLink}>{item.name}</Link>
                        ))}
                    </div>

                    <div>
                        <h5 className={styles.footerTitle}>КОНТАКТЫ</h5>
                        <div className={styles.footerContact}>
                            <MapPinIcon /> Токсово, Ленинградская область, Ленинградское шоссе, 13А
                        </div>
                        <div className={styles.footerContact}>
                            <PhoneIcon /> +7 (968) 195-10-71
                        </div>
                        <div className={styles.footerContact}>
                            <ClockIcon /> 10:00 — 21:00 ежедневно
                        </div>
                        <a href="https://vk.com/avtokeis" target="_blank" rel="noopener noreferrer" className={styles.vkButton}>
                            VK
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>© 2026 Автокейс. Все права защищены.</div>
                    <div className={styles.footerRating}>
                        <span>Рейтинг на Яндекс</span>
                        <div className={styles.footerStars}>
                            {renderStars(5)}
                        </div>
                        <span className={styles.footerRatingNum}>5.0</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
