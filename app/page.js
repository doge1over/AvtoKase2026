'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  const galleryImages = [
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600',
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600',
  ];

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>АК</div>
          <div>
            <div className={styles.logoTitle}>АВТОКЕЙС</div>
            <div className={styles.logoSubtitle}>Автосервис</div>
          </div>
        </div>

        <nav className={styles.nav}>
          {['Главная', 'Услуги', 'Цены', 'О нас', 'Контакты'].map((item, i) => (
            <a key={i} href="#" className={styles.navLink}>{item}</a>
          ))}
        </nav>

        <div className={styles.headerRight}>
          <div className={styles.headerContact}>
            <div className={styles.workTime}>10:00 — 21:00</div>
            <a href="tel:+79110141751" className={styles.phone}>
              +7 (911) 014-17-51
            </a>
          </div>
          <button className={styles.btnPrimary}>
            <span>📞</span> ЗАПИСАТЬСЯ
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroDecor} />

        <div className={styles.heroContent}>
          <div className={`${styles.heroLocation} ${isVisible ? styles.animateSlideIn : ''}`}>
            ТОКСОВО • ЛЕН. ОБЛАСТЬ
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
              ЗАПИСАТЬСЯ НА СЕРВИС
            </button>
            <button className={styles.btnSecondary}>
              НАШИ РАБОТЫ
            </button>
          </div>
        </div>

        <div className={styles.heroStats}>
          {[
            { num: '10+', label: 'Лет опыта' },
            { num: '5000+', label: 'Клиентов' },
            { num: '24/7', label: 'Поддержка' },
          ].map((stat, i) => (
            <div key={i} className={`${styles.statItem} ${isVisible ? styles.animateFadeIn : ''}`}>
              <div className={styles.statNum}>{stat.num}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
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
                <div className={styles.featureIcon}>⚡</div>
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
      <section className={styles.priceSection}>
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
                <span>🎁</span>
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

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.sectionLabel}>ГАЛЕРЕЯ</h2>
          <h3 className={styles.sectionTitle}>Наши работы</h3>
        </div>

        <div className={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <img src={img} alt={`Work ${i + 1}`} />
            </div>
          ))}
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
              +7 (911) 014-17-51
            </a>
            <a href="https://vk.com/avtokeis" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnOutline}>
              VK ГРУППА
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=56867349266"
          className={styles.map}
          title="Карта"
        />
        <div className={styles.mapCard}>
          <h4 className={styles.mapCardTitle}>Как нас найти</h4>
          <div className={styles.mapCardItem}>📍 Токсово, Ленинградская область</div>
          <div className={styles.mapCardItem}>⏰ 10:00 — 21:00 ежедневно</div>
          <div className={styles.mapCardItem}>📞 +7 (911) 014-17-51</div>
          <a href="https://yandex.ru/maps/-/CDT5vB~H" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            ПОСТРОИТЬ МАРШРУТ
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.logo} style={{ marginBottom: '24px' }}>
              <div className={styles.logoIcon}>АК</div>
              <div>
                <div className={styles.logoTitle}>АВТОКЕЙС</div>
                <div className={styles.logoSubtitle}>Автосервис</div>
              </div>
            </div>
            <p className={styles.footerDesc}>
              Качественный ремонт автомобилей в Токсово. Профессиональный подход и честные цены.
            </p>
          </div>

          <div>
            <h5 className={styles.footerTitle}>НАВИГАЦИЯ</h5>
            {['Главная', 'Услуги', 'Цены', 'О нас', 'Контакты'].map((item, i) => (
              <a key={i} href="#" className={styles.footerLink}>{item}</a>
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
            <div className={styles.footerContact}>📍 Токсово, Лен. область</div>
            <div className={styles.footerContact}>📞 +7 (911) 014-17-51</div>
            <div className={styles.footerContact}>⏰ 10:00 — 21:00</div>
            <a href="https://vk.com/avtokeis" target="_blank" rel="noopener noreferrer" className={styles.vkButton}>
              VK
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>© 2024 Автокейс. Все права защищены.</div>
          <div className={styles.rating}>
            <span>Рейтинг на Яндекс</span>
            <span className={styles.ratingStars}>★ 4.9</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
