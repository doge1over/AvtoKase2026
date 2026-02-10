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

  return null;
}
