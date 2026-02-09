'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    const [activeService, setActiveService] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
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
        '/gallery/IMG_8192 1.png',
        '/gallery/IMG_8311 1.png',
        '/gallery/IMG_7893 2.png',
        '/gallery/IMG_7255 1.png',
    ];

    const PhoneIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    );

    const ClockIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
        </svg>
    );

    const MapPinIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    );

    const GiftIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 12 20 22 4 22 4 12"/>
            <rect x="2" y="7" width="20" height="5"/>
            <line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
        </svg>
    );

    const StarIcon = ({ filled = true }: { filled?: boolean }) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
    );

    const ArrowRightIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
        </svg>
    );

    const WrenchIcon = () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
    );

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
                    <button className={styles.btnPrimary}>
                        <PhoneIcon /> ЗАПИСАТЬСЯ
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroGlow} />
                <div className={styles.heroDecor} />

                <div className={styles.heroContent}>
                    <div className={`${styles.heroLocation} ${isVisible ? styles.animateSlideIn : ''}`}>
                        <MapPinIcon /> ТОКСОВО • ЛЕН. ОБЛАСТЬ
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
                        <button className={styles.btnPrimary}>
                            ЗАПИСАТЬСЯ НА СЕРВИС <ArrowRightIcon />
                        </button>
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
                />
                <div className={styles.mapCard}>
                    <h4 className={styles.mapCardTitle}>Как нас найти</h4>
                    <div className={styles.mapCardItem}>
                        <MapPinIcon /> Токсово, Ленинградская область
                    </div>
                    <div className={styles.mapCardItem}>
                        <ClockIcon /> 10:00 — 21:00 ежедневно
                    </div>
                    <div className={styles.mapCardItem}>
                        <PhoneIcon /> +7 (911) 014-17-51
                    </div>
                    <a href="https://yandex.ru/maps/-/CDT5vB~H" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                        ПОСТРОИТЬ МАРШРУТ <ArrowRightIcon />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerGrid}>
                    <div>
                        <Link href="/" className={styles.logo} style={{ marginBottom: '24px' }}>
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
                            <MapPinIcon /> Токсово, Лен. область
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