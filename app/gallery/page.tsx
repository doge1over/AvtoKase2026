'use client';

import { useState } from 'react';
import { galleryItems } from '../galleryImages';
import { serviceNavigation } from '../serviceNavigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './gallery.module.css';
import { PhoneIcon, ClockIcon, MapPinIcon, ArrowLeftIcon, CloseIcon } from '../components/Icons';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(8);

    const navItems = [
        { name: 'Главная', href: '/' },
        { name: 'Услуги', href: '/uslugi' },
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
                        <a href="tel:+79681951071" className={styles.phone}>
                            +7 (968) 195-10-71
                        </a>
                    </div>
                    <a href="tel:+79681951071" className={styles.btnPrimary}>
                        <PhoneIcon /> ЗАПИСАТЬСЯ
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className={styles.heroSmall}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeftIcon /> Назад на главную
                </Link>
                <h1 className={styles.pageTitle}>Галерея работ</h1>
                <p className={styles.pageDesc}>
                    Фотографии выполненных работ в автосервисе Автокейс — ремонт авто в Токсово
                </p>
                <nav className={styles.serviceNavigation} aria-label="Услуги автосервиса">
                    {serviceNavigation.map(item => <Link href={item.href} key={item.href}>{item.title} →</Link>)}
                </nav>
            </section>

            {/* Gallery Grid */}
            <section className={styles.gallerySection}>
                <div id="gallery-grid" className={styles.galleryGrid}>
                    {galleryItems.slice(0, visibleCount).map((item, index) => (
                        <button
                            type="button"
                            key={item.id}
                            className={styles.galleryItem}
                            aria-label={`Открыть фото: ${item.title}`}
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={400}
                                height={400}
                                sizes="(max-width: 768px) calc((100vw - 48px) / 2), (max-width: 1024px) calc((100vw - 152px) / 3), (max-width: 1520px) calc((100vw - 168px) / 4), 338px"
                                quality={65}
                                priority={index === 0}
                                loading={index === 0 ? undefined : 'lazy'}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhA//aAAwDAQACEQMRAD8AzoW9tLcwyXEaySwqVR2UEoCckA/BnvFVNO2/ptvbRxrYWrBVC5khViT9JJG5P0mlKECnsU9LbZ//2Q=="
                            />
                        </button>
                    ))}
                </div>
                <div className={styles.galleryMore}>
                    <p aria-live="polite">Показано {Math.min(visibleCount, galleryItems.length)} из {galleryItems.length} фотографий</p>
                    {visibleCount < galleryItems.length && <button type="button" className={styles.btnSecondary} aria-controls="gallery-grid" onClick={() => setVisibleCount(count => Math.min(count + 8, galleryItems.length))}>Показать ещё фотографии</button>}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                    <button aria-label="Закрыть фотографию" className={styles.lightboxClose} onClick={() => setSelectedImage(null)}>
                        <CloseIcon />
                    </button>
                    <Image
                        src={selectedImage}
                        alt={galleryItems.find(item => item.src === selectedImage)?.title ?? 'Фотография автосервиса Автокейс'}
                        width={1200}
                        height={1200}
                        sizes="90vw"
                        quality={90}
                        onClick={(e) => e.stopPropagation()}
                        style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto' }}
                    />
                </div>
            )}

            {/* CTA */}
            <section className={styles.ctaSmall}>
                <h2 className={styles.ctaTitle}>Хотите такой же результат?</h2>
                <p className={styles.ctaDesc}>Запишитесь на сервис прямо сейчас</p>
                <div className={styles.ctaButtons}>
                    <a href="tel:+79681951071" className={styles.btnPhone}>
                        <PhoneIcon /> +7 (968) 195-10-71
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
                        {[
                            { name: 'Шиномонтаж', href: '/#services' },
                            { name: 'Развал-схождение', href: '/#services' },
                            { name: 'Диагностика', href: '/#services' },
                            { name: 'Ремонт двигателя', href: '/#services' },
                            { name: 'Заправка кондиционера', href: '/#services' },
                        ].map((item, i) => (
                            <Link key={i} href={item.href} className={styles.footerLink}>{item.name}</Link>
                        ))}
                    </div>

                    <div>
                        <h5 className={styles.footerTitle}>КОНТАКТЫ</h5>
                        <div className={styles.footerContact}>
                            <MapPinIcon /> Токсово, Лен. область, Ленинградское ш. 13А
                        </div>
                        <div className={styles.footerContact}>
                            <PhoneIcon /> +7 (968) 195-10-71
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
                    <div className={styles.copyright}>© 2026 Автокейс. Все права защищены.</div>
                </div>
            </footer>
        </div>
    );
}
