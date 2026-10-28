'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import { WrenchIcon } from './Icons';

interface Service {
    id: string;
    title: string;
    desc: string;
    price: string;
    href?: string;
}

export default function ServiceCards({ services }: { services: Service[] }) {
    const [activeService, setActiveService] = useState(0);

    return (
        <div className={styles.servicesGrid}>
            <div className={styles.servicesList}>
                {services.map((service, i) => {
                    const className = `${styles.serviceCard} ${activeService === i ? styles.serviceCardActive : ''}`;
                    const content = (
                        <div className={styles.serviceCardContent}>
                            <div>
                                <div className={`${styles.serviceNum} ${activeService === i ? styles.serviceNumActive : ''}`}>
                                    {service.id}
                                </div>
                                <h4 className={styles.serviceTitle}>{service.title}</h4>
                                <p className={styles.serviceDesc}>{service.desc}</p>
                                {service.href && <span className={styles.serviceDetails}>{service.title}: цены и запись →</span>}
                            </div>
                            <div className={styles.servicePrice}>{service.price}</div>
                        </div>
                    );
                    return service.href ? (
                        <Link key={service.id} href={service.href} prefetch={false} className={className} aria-label={`${service.title}: цены и запись`} onMouseEnter={() => setActiveService(i)} onFocus={() => setActiveService(i)}>
                            {content}
                        </Link>
                    ) : (
                        <div key={service.id} className={className} onClick={() => setActiveService(i)}>{content}</div>
                    );
                })}
            </div>

            <div className={styles.featureCard}>
                <div>
                    <div className={styles.featureIcon}>
                        <WrenchIcon />
                    </div>
                    <h4 className={styles.featureTitle}>Качественный ремонт</h4>
                    <p className={styles.featureDesc}>
                        Ремонт от мастеров своего дела. Используем только качественные запчасти и современное оборудование.
                        Работаем с автомобилями всех марок: Toyota, Kia, Hyundai, BMW, Volkswagen, ВАЗ и другими.
                    </p>
                </div>
                <div className={styles.featureNote}>
                    ФИКСИРОВАННЫЙ НОРМО-ЧАС 2500 ₽ (кроме грузовых)
                </div>
            </div>
        </div>
    );
}
