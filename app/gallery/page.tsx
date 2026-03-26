'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './gallery.module.css';
import { PhoneIcon, ClockIcon, MapPinIcon, ArrowLeftIcon, CloseIcon } from '../components/Icons';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryItems = [
        { id: 1, src: '/gallery/IMG_8192 1.webp', title: 'Ремонт подвески автомобиля в Автокейс Токсово' },
        { id: 2, src: '/gallery/IMG_8311 1.webp', title: 'Замена тормозных дисков в автосервисе' },
        { id: 3, src: '/gallery/IMG_72311 1.webp', title: 'Диагностика ходовой части автомобиля' },
        { id: 4, src: '/gallery/IMG_72331 1.webp', title: 'Ремонт двигателя в Автокейс' },
        { id: 5, src: '/gallery/IMG_7232 1.webp', title: 'Замена масла и фильтров' },
        { id: 6, src: '/gallery/IMG_7234 1.webp', title: 'Обслуживание тормозной системы' },
        { id: 7, src: '/gallery/IMG_7240 1.webp', title: 'Ремонт подвески — замена амортизаторов' },
        { id: 8, src: '/gallery/IMG_7255 1.webp', title: 'Шиномонтаж и балансировка колёс' },
        { id: 9, src: '/gallery/IMG_7305 1.webp', title: 'Компьютерная диагностика автомобиля' },
        { id: 10, src: '/gallery/IMG_7376 1.webp', title: 'Ремонт топливной системы' },
        { id: 11, src: '/gallery/IMG_7401 1.webp', title: 'Развал-схождение на стенде' },
        { id: 12, src: '/gallery/IMG_7402 1.webp', title: 'Регулировка углов установки колёс' },
        { id: 13, src: '/gallery/IMG_7583 1.webp', title: 'Заправка автокондиционера' },
        { id: 14, src: '/gallery/IMG_7585 1.webp', title: 'Проверка герметичности кондиционера' },
        { id: 15, src: '/gallery/IMG_7588 1.webp', title: 'Ремонт выхлопной системы' },
        { id: 16, src: '/gallery/IMG_7624 1.webp', title: 'Замена ремня ГРМ' },
        { id: 17, src: '/gallery/IMG_7885 1.webp', title: 'Капитальный ремонт двигателя' },
        { id: 18, src: '/gallery/IMG_7886 1.webp', title: 'Сборка двигателя после ремонта' },
        { id: 19, src: '/gallery/IMG_7893 1.webp', title: 'Ремонт коробки передач' },
        { id: 20, src: '/gallery/IMG_7893 2.webp', title: 'Обслуживание трансмиссии' },
        { id: 21, src: '/gallery/IMG_6484 1.webp', title: 'Замена сцепления автомобиля' },
        { id: 22, src: '/gallery/IMG_6532 1.webp', title: 'Ремонт электрооборудования' },
        { id: 23, src: '/gallery/IMG_6728 1.webp', title: 'Подготовка автомобиля к ТО' },
        { id: 24, src: '/gallery/IMG_7228 1.webp', title: 'Ремонт рулевого управления' },
    ];

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
                    Фотографии выполненных работ в автосервисе Автокейс — ремонт авто в Токсово
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
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={400}
                                height={400}
                                quality={75}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhA//aAAwDAQACEQMRAD8AzoW9tLcwyXEaySwqVR2UEoCckA/BnvFVNO2/ptvbRxrYWrBVC5khViT9JJG5P0mlKECnsU9LbZ//2Q=="
                            />
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
                    <Image
                        src={selectedImage}
                        alt="Gallery"
                        width={1200}
                        height={1200}
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
                    <div className={styles.copyright}>© 2026 Автокейс. Все права защищены.</div>
                </div>
            </footer>
        </div>
    );
}