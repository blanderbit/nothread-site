'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { defaultLocale } from '@/utils/config';
import { locales } from '@monorepo/cms/src/config';
import type { Config } from '@monorepo/cms/src/payload-types';

import { Button } from '../Button';

import styles from './SelectLanguage.module.scss';

export const SelectLanguage = ({ className }: { className?: string }) => {
  const pathname = usePathname(); // Отримуємо поточний шлях
  const activeLocale = useLocale(); // Отримуємо активну локаль

  const [localesLinks, setLocalesLinks] = useState<Record<Config['locale'], string>>();

  const localeStringMap: Record<string, string> = {
    ua: activeLocale === 'ua' ? 'Ua' : 'Ua',
    en: 'En',
  };

  useEffect(() => {
    const localesLinks = locales.reduce(
      (acc, locale) => {
        const linkEl = document.head.querySelector(
          `link[rel="alternate"][hreflang="${locale === 'ua' ? 'uk' : locale}"]`,
        );

        let alternatePathname = linkEl?.getAttribute('href') || pathname;

        // Видаляємо домен, якщо він присутній
        try {
          const urlObj = new URL(alternatePathname, window.location.origin);
          alternatePathname = urlObj.pathname;
        } catch (e) {
          // Якщо це вже шлях, залишаємо як є
        }

        // Видаляємо локаль на початку шляху
        alternatePathname = alternatePathname.replace(/^\/(ua|en)/, '');

        // Формуємо фінальне посилання
        const localizedPath =
          locale === defaultLocale ? alternatePathname : `/${locale}${alternatePathname}`;

        acc[locale as Config['locale']] = localizedPath || '/';
        return acc;
      },
      {} as Record<Config['locale'], string>,
    );

    setLocalesLinks(localesLinks);
  }, [pathname]);

  return (
    <div className={clsx(styles.wrapper, className)}>
      {locales.map((locale) => {
        console.log(locale);
        return (
          <Link
            key={locale}
            href={localesLinks?.[locale as Config['locale']] ?? '/'}
            locale={locale}
          >
            <Button
              asDiv
              className={clsx(styles.wrapper__item, locale === activeLocale && styles.active)}
            >
              {localeStringMap[locale]}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};
