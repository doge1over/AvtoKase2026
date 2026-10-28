# Измерение скорости локальной версии — 27 октября 2026

Производственная сборка Next.js 14.2.0, Lighthouse 13.5.0, Chrome: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/156.0.0.0 Safari/537.36. Адрес измерения: http://localhost:3000. Исходный код во время замеров не менялся.

## Условия

- Сборка: npm run build, сервер: npm run start.
- Последовательные прогоны, отдельные запуски Chrome, стандартный сброс хранилищ Lighthouse.
- Мобильный профиль: симуляция сети, RTT 150 мс, скорость 1638.4 Кбит/с, замедление CPU ×4.
- Компьютер: стандартный пресет Lighthouse desktop.
- Три мобильных замера главной; в сводке выбран home-mobile-3 — средний по порядку LCP. Для остальных вариантов — по одному замеру.
- Аудит только категории Performance. У всех шести отчётов нет runtimeError и runWarnings.

## Результаты

| Страница | Performance | FCP, с | LCP, с | TBT, мс | CLS | Передано, КиБ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Главная, телефон | 76/100 | 3.76 | 4.36 | 0 | 0.025 | 699 |
| Главная, компьютер | 99/100 | 0.69 | 0.85 | 0 | 0.001 | 698 |
| Шиномонтаж, телефон | 74/100 | 3.61 | 4.96 | 2 | 0.000 | 735 |
| Галерея, телефон | 77/100 | 0.90 | 6.98 | 2 | 0.002 | 1977 |

FCP — появление первого контента. LCP — появление крупнейшего видимого элемента. TBT — блокировки основного потока во время загрузки. CLS — сдвиги макета. Это не время полной загрузки страницы.

Ориентиры: Lighthouse 90–100 — хорошая оценка; целевой LCP ≤ 2,5 с, CLS ≤ 0,1. Проверка реальных Core Web Vitals требует полевых данных, в том числе INP и 75-го перцентиля. Этот лабораторный тест не измеряет INP и не подтверждает прохождение Core Web Vitals. Локальный сервер не воспроизводит задержки опубликованного хостинга.

## Что замедляет загрузку

1. **Шрифты.** На главной их передача занимает 468 КиБ — 67% всего трафика замера. Файлы содержат полный набор символов. Следующий шаг — подготовить подмножества с нужной кириллицей, латиницей и знаками, проверить все используемые начертания и приоритет загрузки. Это гипотеза оптимизации, точный выигрыш нужно измерить после изменений.
2. **Галерея.** За время замера загружается 1238 КиБ изображений. Lighthouse оценивает потенциальную экономию доставки изображений в Est savings of 1,131 KiB. Крупный видимый элемент — первое изображение галереи с loading=lazy. Следующий шаг — приоритет для первого экрана, меньшие превью и ограничение начальной загрузки остальных фото.
3. **Блокирующие CSS-запросы.** Lighthouse указывает их как возможность ускорения первого отображения. Оценка экономии в аудите является моделью и не складывается напрямую с другими рекомендациями.

На главной и странице услуги LCP превышает целевой ориентир в мобильном профиле. На компьютере главная загружается быстро. TBT и CLS малы во всех замерах; первоочередная задача — доставка ресурсов первого экрана.

## Все прогоны

| Прогон | Performance | FCP, с | LCP, с | TBT, мс | CLS | Передано, КиБ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| home-mobile-1 | 76/100 | 3.76 | 4.36 | 0 | 0.025 | 699 |
| home-mobile-2 | 76/100 | 3.76 | 4.36 | 0 | 0.025 | 699 |
| home-mobile-3 | 76/100 | 3.76 | 4.36 | 0 | 0.025 | 699 |
| home-desktop | 99/100 | 0.69 | 0.85 | 0 | 0.001 | 698 |
| shinomontazh-mobile | 74/100 | 3.61 | 4.96 | 2 | 0.000 | 735 |
| gallery-mobile | 77/100 | 0.90 | 6.98 | 2 | 0.002 | 1977 |

## Полные отчёты

- [home-mobile-1: HTML](../reports/performance/2026-10-27/home-mobile-1.report.html), [JSON](../reports/performance/2026-10-27/home-mobile-1.report.json).
- [home-mobile-2: HTML](../reports/performance/2026-10-27/home-mobile-2.report.html), [JSON](../reports/performance/2026-10-27/home-mobile-2.report.json).
- [home-mobile-3: HTML](../reports/performance/2026-10-27/home-mobile-3.report.html), [JSON](../reports/performance/2026-10-27/home-mobile-3.report.json).
- [home-desktop: HTML](../reports/performance/2026-10-27/home-desktop.report.html), [JSON](../reports/performance/2026-10-27/home-desktop.report.json).
- [shinomontazh-mobile: HTML](../reports/performance/2026-10-27/shinomontazh-mobile.report.html), [JSON](../reports/performance/2026-10-27/shinomontazh-mobile.report.json).
- [gallery-mobile: HTML](../reports/performance/2026-10-27/gallery-mobile.report.html), [JSON](../reports/performance/2026-10-27/gallery-mobile.report.json).

## Источники интерпретации

- [Google: Web Vitals](https://web.dev/articles/vitals).
- [Chrome: Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring).
