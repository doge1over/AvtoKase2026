'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './gallery.module.css';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryItems = [
        { id: 1, src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800', title: 'Капитальный ремонт двигателя BMW' },
        { id: 2, src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800', title: 'Замена подвески Toyota' },
        { id: 3, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', title: 'Шиномонтаж R20' },
        { id: 4, src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800', title: 'Диагностика Mercedes' },
        { id: 5, src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800', title: 'Тюнинг Land Cruiser' },
        { id: 6, src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', title: 'Ремонт Porsche' },
        { id: 7, src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', title: 'Развал-схождение Audi' },
        { id: 8, src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', title: 'Подготовка к бездорожью' },
        { id: 9, src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800', title: 'Балансировка колёс' },
        { id: 10, src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', title: 'Замена масла в АКПП' },
        { id: 11, src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800', title: 'Ремонт тормозной системы' },
        { id: 12, src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800', title: 'Лифт подвески Pajero' },
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

    const CloseIcon = () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    );

    const ArrowLeftIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
        </svg>
    );

    const ArrowRightIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
        </svg>
    );

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
                        <Link
                            key={i}
                            href={item.href}
                            className={`${styles.navLink} ${item.href === '/gallery' ? styles.navLinkActive : ''}`}
                        >
                            {item.name}
                        </Link>
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

            {/* Hero */}
            <section className={styles.heroSmall}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeftIcon /> Назад на главную
                </Link>
                <h1 className={styles.pageTitle}>Галерея работ</h1>
                <p className={styles.pageDesc}>
                    Фотографии выполненных работ в нашем автосервисе
                </p>
            </section>

            {/* Gallery Grid */}
            <section className={styles.gallerySection}>
                <div className={styles.galleryGrid}>
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.galleryItem}
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <img src={item.src} alt={item.title} />
                            <div className={styles.galleryOverlay}>
                                <span className={styles.galleryTitle}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                    <button className={styles.lightboxClose} onClick={() => setSelectedImage(null)}>
                        <CloseIcon />
                    </button>
                    <img src={selectedImage} alt="Gallery" onClick={(e) => e.stopPropagation()} />
                </div>
            )}

            {/* CTA */}
            <section className={styles.ctaSmall}>
                <h2 className={styles.ctaTitle}>Хотите такой же результат?</h2>
                <p className={styles.ctaDesc}>Запишитесь на сервис прямо сейчас</p>
                <div className={styles.ctaButtons}>
                    <a href="tel:+79110141751" className={styles.btnPhone}>
                        <PhoneIcon /> +7 (911) 014-17-51
                    </a>
                    <Link href="/" className={styles.btnBack}>
                        <ArrowLeftIcon /> НА ГЛАВНУЮ
                    </Link>
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
                </div>
            </footer>
        </div>
    );
}