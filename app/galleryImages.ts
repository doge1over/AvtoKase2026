// Подписи описывают содержимое снимков, не предполагая выполненные работы.
export const galleryItems = [
    { id: 1, src: '/gallery/IMG_7234 1.webp', title: 'Шиномонтажное оборудование и автомобиль на подъёмнике' },
    { id: 2, src: '/gallery/IMG_72331 1.webp', title: 'Колёса и оборудование в шиномонтажной зоне' },
    { id: 3, src: '/gallery/IMG_6728 1.webp', title: 'Ремонтная зона с подъёмниками' },
    { id: 4, src: '/gallery/IMG_8192 1.webp', title: 'Ford Ranger с открытым капотом в ремонтной зоне' },
    { id: 5, src: '/gallery/IMG_8311 1.webp', title: 'Внедорожник с открытым капотом на подъёмнике' },
    { id: 6, src: '/gallery/IMG_72311 1.webp', title: 'Внедорожник на подъёмнике' },
    { id: 7, src: '/gallery/IMG_7232 1.webp', title: 'Снятый двигатель в ремонтной зоне' },
    { id: 8, src: '/gallery/IMG_7228 1.webp', title: 'Автомобиль со снятыми колёсами на подъёмнике' },
    { id: 9, src: '/gallery/IMG_7240 1.webp', title: 'Здание автосервиса и автомобили у въезда' },
    { id: 10, src: '/gallery/IMG_7255 1.webp', title: 'Mercedes-Benz Unimog у въезда в автосервис' },
    { id: 11, src: '/gallery/IMG_7305 1.webp', title: 'Внедорожник на заснеженной дороге' },
    { id: 12, src: '/gallery/IMG_7376 1.webp', title: 'Подкапотное пространство внедорожника в ремонтной зоне' },
    { id: 13, src: '/gallery/IMG_7401 1.webp', title: 'Внедорожник с открытым капотом в мастерской' },
    { id: 14, src: '/gallery/IMG_7402 1.webp', title: 'Внедорожный автомобиль со снятыми кузовными панелями' },
    { id: 15, src: '/gallery/IMG_7583 1.webp', title: 'Микроавтобус на подъёмнике' },
    { id: 16, src: '/gallery/IMG_7585 1.webp', title: 'Внедорожник со снятым задним колесом' },
    { id: 17, src: '/gallery/IMG_7588 1.webp', title: 'Mercedes-Benz G-Class в ремонтной зоне' },
    { id: 18, src: '/gallery/IMG_7624 1.webp', title: 'Mercedes-Benz G-Class на подъёмнике' },
    { id: 19, src: '/gallery/IMG_7885 1.webp', title: 'Hyundai с открытым капотом в мастерской' },
    { id: 20, src: '/gallery/IMG_7886 1.webp', title: 'Квадроцикл и стеллажи с деталями в мастерской' },
    { id: 21, src: '/gallery/IMG_7893 1.webp', title: 'Пикап у здания автосервиса' },
    { id: 22, src: '/gallery/IMG_7893 2.webp', title: 'Автомобиль с защитными накидками на кузове' },
    { id: 23, src: '/gallery/IMG_6484 1.webp', title: 'Volkswagen Golf на открытой площадке' },
    { id: 24, src: '/gallery/IMG_6532 1.webp', title: 'Автомобиль на подъёмнике с подъездными трапами' },
];

export const galleryPreview = galleryItems.slice(0, 4).map(({ src, title }) => ({ src, alt: title }));
