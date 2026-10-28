import type { Metadata } from 'next';
import ServicePage from '../components/ServicePage';
import { airConditioningPrices, airConditioningStartingPrice, formatPrice } from '../servicePrices';

const title = 'Заправка автокондиционера в Токсово';
const description = `Заправка кондиционера в Автокейс — от ${formatPrice(airConditioningStartingPrice)}. Диагностика и обслуживание автокондиционеров. Токсово, Ленинградское шоссе, 13А.`;
export const metadata: Metadata = {
    title: `${title} — цены | Автокейс`, description,
    alternates: { canonical: '/zapravka-kondicionera' },
    openGraph: { title, description, url: '/zapravka-kondicionera', images: ['/gallery/IMG_6728 1.webp'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/gallery/IMG_6728 1.webp'] },
};

export default function Page() {
    return <ServicePage
        title={title} path="/zapravka-kondicionera"
        intro="Диагностика и заправка автомобильных кондиционеров в автосервисе Автокейс. При записи сообщите модель автомобиля и опишите проблему: плохо охлаждает, не включается или требуется обслуживание системы."
        price={`Заправка кондиционера — от ${formatPrice(airConditioningStartingPrice)}`}
        priceNote="Диагностика и хладагент — разные позиции прайса. Итоговую стоимость обслуживания согласуйте до начала работ."
        priceRows={[{ name: 'Заправка кондиционера', price: airConditioningStartingPrice, unit: 'По согласованному составу работ', from: true }, ...airConditioningPrices]}
        priceExplanation={`Начальная стоимость заправки — от ${formatPrice(airConditioningStartingPrice)}. Итоговая цена зависит от состава работ и объёма хладагента. Отдельные позиции диагностики и фреона приведены по прайсу Яндекса.`}
        priceHeading="Цены на обслуживание кондиционера"
        image="/gallery/IMG_6728 1.webp" imageAlt="Ремонтная зона автосервиса Автокейс"
        steps={['Сообщите модель автомобиля и симптомы при записи.', 'Уточните необходимую проверку, тип хладагента и состав обслуживания.', 'Согласуйте стоимость работ и хладагента перед обслуживанием.']}
        reasons={['Кондиционер стал хуже охлаждать салон.', 'Нужно проверить работу системы перед заправкой.', 'Требуется согласовать обслуживание кондиционера после ремонта.']}
        sections={[
            { title: 'Как читать прайс', text: `Диагностика кондиционера указана отдельно: ${formatPrice(airConditioningPrices[0].price)} за услугу. Фреон указан по ${formatPrice(airConditioningPrices[1].price)} за 10 г. Это не фиксированная стоимость полной заправки любого автомобиля: нужное количество хладагента и состав работ уточняются отдельно.` },
            { title: 'Что уточнить при записи', text: 'Назовите марку, модель и год выпуска автомобиля. Уточните, с каким хладагентом работает сервис для вашей модели, какие проверки входят в обслуживание и как рассчитывается итоговая цена. Если есть результаты предыдущего ремонта кондиционера, сообщите о них мастеру.' },
        ]}
        questions={[
            { question: 'За какой объём указана цена фреона?', answer: `В прайсе Яндекса указано ${formatPrice(airConditioningPrices[1].price)} за 10 г. Тип и необходимое количество хладагента нужно уточнить для конкретного автомобиля.` },
            { question: 'Диагностика входит в стоимость заправки?', answer: 'В опубликованном прайсе диагностика и хладагент указаны раздельно. Состав обслуживания и итоговую стоимость согласуйте с мастером.' },
            { question: 'Можно ли заправить кондиционер любой модели?', answer: 'Возможность обслуживания вашего автомобиля и доступность подходящего хладагента уточните по телефону.' },
        ]}
        related={{ href: '/diagnostika', title: 'Компьютерная диагностика автомобиля' }}
    />;
}
