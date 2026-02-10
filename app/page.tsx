'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { PhoneIcon, ClockIcon, MapPinIcon, GiftIcon, StarIcon, ArrowRightIcon, WrenchIcon } from './components/Icons';

export default function Home() {
    const [activeService, setActiveService] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        // Используем requestAnimationFrame чтобы избежать ESLint ошибки
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    const services = [
        { id: '01', title: 'Шиномонтаж', desc: 'Размер колес до 26 дюймов', price: 'от 1400 ₽' },
        { id: '02', title: 'Заправка кондиционеров', desc: 'Автоматическая заправочная станция', price: 'от 1500 ₽' },
        { id: '03', title: 'Магазин запчастей', desc: 'Собственный магазин авто-запчастей', price: '—' },
        { id: '04', title: 'Развал-схождение', desc: '4-х стоечный подъёмник для развал-схождения', price: 'от 1000 ₽' },
        { id: '05', title: 'Ремонт двигателя', desc: 'Капитальный ремонт от мастеров своего дела', price: 'от 35000 ₽' },
    ];

    const priceList = [
        { service: 'Ремонт топливной системы', price: 'от 1500 ₽' },
        { service: 'Обслуживание подвески', price: 'от 1500 ₽' },
        { service: 'Обслуживание тормозной системы', price: 'от 1500 ₽' },
        { service: 'Замена жидкостей (масла)', price: 'от 1660 ₽' },
        { service: 'Компьютерная диагностика', price: 'от 1500 ₽' },
        { service: 'Сезонная смена шин', price: 'от 1400 ₽' },
        { service: 'Ремонт всех видов шин', price: 'от 500 ₽' },
        { service: 'Компьютерная балансировка', price: 'от 400 ₽' },
        { service: 'Сход-развал', price: 'от 1000 ₽' },
    ];

    const reviews = [
        {
            name: 'Александр М.',
            date: '15 января 2024',
            rating: 5,
            text: 'Отличный сервис! Сделали развал-схождение быстро и качественно. Цены адекватные, мастера вежливые. Рекомендую!',
            car: 'Toyota Camry'
        },
        {
            name: 'Елена К.',
            date: '28 декабря 2023',
            rating: 5,
            text: 'Обратилась с проблемой кондиционера. Диагностировали и заправили за час. Теперь всё работает отлично. Спасибо!',
            car: 'Kia Rio'
        },
        {
            name: 'Дмитрий В.',
            date: '10 декабря 2023',
            rating: 5,
            text: 'Делал капремонт двигателя. Работа сложная, но ребята справились на отлично. Машина как новая!',
            car: 'BMW X5'
        },
        {
            name: 'Ольга С.',
            date: '5 ноября 2023',
            rating: 4,
            text: 'Хороший шиномонтаж, быстро переобули на зиму. Единственное — пришлось немного подождать в очереди.',
            car: 'Hyundai Solaris'
        },
    ];

    const galleryImages = [
        '/gallery/IMG_8192 1.webp',
        '/gallery/IMG_8311 1.webp',
        '/gallery/IMG_7893 2.webp',
        '/gallery/IMG_7255 1.webp',
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
                <StarIcon filled={i < rating} />
            </span>
        ));
    };

    const navItems = [
        { name: 'Главная', href: '/' },
        { name: 'Услуги', href: '/#services' },
        { name: 'Цены', href: '/#prices' },
        { name: 'Отзывы', href: '/#reviews' },
        { name: 'Галерея', href: '/gallery' },
        { name: 'Контакты', href: '/#contacts' },
    ];

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
                        <a href="tel:+79110141751" className={styles.phone}>
                            +7 (911) 014-17-51
                        </a>
                    </div>
                    <a href="tel:+79110141751" className={styles.btnPrimary}>
                        <PhoneIcon /> ЗАПИСАТЬСЯ
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroGlow} />
                <div className={styles.heroDecor} />

                <div className={styles.heroContent}>
                    <div className={`${styles.heroLocation} ${isVisible ? styles.animateSlideIn : ''}`}>
                        <MapPinIcon /> ТОКСОВО • ЛЕН. ОБЛАСТЬ • Ленинградское ш. 13А
                    </div>

                    <h1 className={`${styles.heroTitle} ${isVisible ? styles.animateSlideUp : ''}`}>
                        РЕМОНТ<br />
                        <span className={styles.heroTitleAccent}>АВТО</span>
                    </h1>

                    <p className={`${styles.heroDesc} ${isVisible ? styles.animateSlideUp : ''}`}>
                        В кратчайшие сроки. Профессионально и аккуратно.
                        Без обмана и непредвиденных трат. С максимальным вниманием к вашей проблеме.
                    </p>

                    <div className={`${styles.heroButtons} ${isVisible ? styles.animateSlideUp : ''}`}>
                        <a href="tel:+79110141751" className={styles.btnPrimary}>
                            ЗАПИСАТЬСЯ НА СЕРВИС <ArrowRightIcon />
                        </a>
                        <Link href="/gallery" className={styles.btnSecondary}>
                            НАШИ РАБОТЫ
                        </Link>
                    </div>
                </div>

                <div className={styles.heroStats}>
                    {[
                        { num: '10+', label: 'Лет опыта' },
                        { num: '5000+', label: 'Клиентов' },
                        { num: '4.9', label: 'Рейтинг' },
                    ].map((stat, i) => (
                        <div key={i} className={`${styles.statItem} ${isVisible ? styles.animateFadeIn : ''}`}>
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
                        <h3 className={styles.sectionTitle}>Наши услуги</h3>
                    </div>

                    <div className={styles.servicesGrid}>
                        <div className={styles.servicesList}>
                            {services.map((service, i) => (
                                <div
                                    key={i}
                                    className={`${styles.serviceCard} ${activeService === i ? styles.serviceCardActive : ''}`}
                                    onClick={() => setActiveService(i)}
                                >
                                    <div className={styles.serviceCardContent}>
                                        <div>
                                            <div className={`${styles.serviceNum} ${activeService === i ? styles.serviceNumActive : ''}`}>
                                                {service.id}
                                            </div>
                                            <h4 className={styles.serviceTitle}>{service.title}</h4>
                                            <p className={styles.serviceDesc}>{service.desc}</p>
                                        </div>
                                        <div className={styles.servicePrice}>{service.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.featureCard}>
                            <div>
                                <div className={styles.featureIcon}>
                                    <WrenchIcon />
                                </div>
                                <h4 className={styles.featureTitle}>Качественный ремонт</h4>
                                <p className={styles.featureDesc}>
                                    Ремонт от мастеров своего дела. Используем только качественные запчасти и современное оборудование.
                                </p>
                            </div>
                            <div className={styles.featureNote}>
                                НОРМО-ЧАС ОТ 1000₽ ДО 3500₽
                            </div>
                        </div>
                    </div>
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
                                    <span className={styles.priceService}>{item.service}</span>
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
                                <span className={styles.ratingNumber}>4.9</span>
                                <div className={styles.ratingStars}>
                                    {renderStars(5)}
                                </div>
                                <span className={styles.ratingCount}>127 отзывов</span>
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
                                    {renderStars(review.rating)}
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
                                src={img}
                                alt={`Работа ${i + 1}`}
                                width={600}
                                height={600}
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

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.ctaGlow} />
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Проблема с автомобилем?</h2>
                    <p className={styles.ctaDesc}>
                        Мы поможем! Звоните прямо сейчас или записывайтесь онлайн.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="tel:+79110141751" className={styles.ctaBtnWhite}>
                            <PhoneIcon /> +7 (911) 014-17-51
                        </a>
                        <a href="https://vk.com/avtokeis" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnOutline}>
                            VK ГРУППА
                        </a>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="contacts" className={styles.mapSection}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=56867349266"
                    className={styles.map}
                    title="Карта"
                    loading="lazy"
                />
                <div className={styles.mapCard}>
                    <h4 className={styles.mapCardTitle}>Как нас найти</h4>
                    <div className={styles.mapCardItem}>
                        <MapPinIcon /> Токсово, Лен. область, Ленинградское ш. 13А
                    </div>
                    <div className={styles.mapCardItem}>
                        <ClockIcon /> 10:00 — 21:00 ежедневно
                    </div>
                    <div className={styles.mapCardItem}>
                        <PhoneIcon /> +7 (911) 014-17-51
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
                            Качественный ремонт автомобилей в Токсово. Профессиональный подход и честные цены.
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
                        {['Шиномонтаж', 'Развал-схождение', 'Диагностика', 'Ремонт двигателя', 'Тюнинг 4x4'].map((item, i) => (
                            <a key={i} href="#" className={styles.footerLink}>{item}</a>
                        ))}
                    </div>

                    <div>
                        <h5 className={styles.footerTitle}>КОНТАКТЫ</h5>
                        <div className={styles.footerContact}>
                            <MapPinIcon /> Токсово, Лен. область, Ленинградское ш. 13А
                        </div>
                        <div className={styles.footerContact}>
                            <PhoneIcon /> +7 (911) 014-17-51
                        </div>
                        <div className={styles.footerContact}>
                            <ClockIcon /> 10:00 — 21:00
                        </div>
                        <a href="https://vk.com/avtokeis" target="_blank" rel="noopener noreferrer" className={styles.vkButton}>
                            VK
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>© 2024 Автокейс. Все права защищены.</div>
                    <div className={styles.footerRating}>
                        <span>Рейтинг на Яндекс</span>
                        <div className={styles.footerStars}>
                            {renderStars(5)}
                        </div>
                        <span className={styles.footerRatingNum}>4.9</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}