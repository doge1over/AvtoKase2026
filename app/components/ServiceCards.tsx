'use client';

import { useState } from 'react';
import styles from '../page.module.css';
import { WrenchIcon } from './Icons';

interface Service {
    id: string;
    title: string;
    desc: string;
    price: string;
}

export default function ServiceCards({ services }: { services: Service[] }) {
    const [activeService, setActiveService] = useState(0);

    return (
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