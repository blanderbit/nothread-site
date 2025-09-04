export const defaultLocale = 'ua';

export const locales = ['ua', 'en'];

export const validLocales = ['ua', 'en'] as const;

export const localesPayloadConfig = [
  {
    code: 'ua',
    label: 'Українська',
  },
  {
    code: 'en',
    label: 'English',
  },
];

export const SITE_URL = process.env.NEXT_PUBLIC_URL!;

export const gMapKey = 'AIzaSyBMXMR7rs6n0ghM-qf6GLvw-SjS9sWbgbs';
