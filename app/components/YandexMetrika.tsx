'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const METRIKA_ID = 106768288;

declare global {
  interface Window {
    ym: (id: number, action: string, params?: string | object) => void;
  }
}

export function trackGoal(goalName: string) {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_ID, 'reachGoal', goalName);
  }
}

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(METRIKA_ID, 'hit', pathname);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      if (link.protocol === 'tel:') {
        trackGoal('phone_click');
        return;
      }
      if (link.hostname === 'yandex.ru' && link.pathname.startsWith('/maps/')) {
        if (link.pathname.includes('/reviews')) trackGoal('reviews_click');
        else if (link.pathname.includes('/prices')) trackGoal('price_source_click');
        else trackGoal('route_click');
      } else if (link.hostname === 'vk.com') {
        trackGoal('vk_click');
      }
    };
    document.addEventListener('click', handleContactClick);
    return () => {
      document.removeEventListener('click', handleContactClick);
    };
  }, []);

  return null;
}
