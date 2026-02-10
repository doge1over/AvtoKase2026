'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Номер счётчика Яндекс Метрики
const METRIKA_ID = 106768288;

declare global {
  interface Window {
    ym: (id: number, action: string, params?: string | object) => void;
  }
}

// Функция для отправки целей
export function trackGoal(goalName: string) {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_ID, 'reachGoal', goalName);
  }
}

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Отслеживание переходов между страницами
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(METRIKA_ID, 'hit', pathname);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Отслеживание кликов по телефону
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    const handlePhoneClick = () => {
      trackGoal('phone_click');
    };

    phoneLinks.forEach(link => {
      link.addEventListener('click', handlePhoneClick);
    });

    return () => {
      phoneLinks.forEach(link => {
        link.removeEventListener('click', handlePhoneClick);
      });
    };
  }, [pathname]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

            ym(${METRIKA_ID}, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/106768288" 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  );
}
