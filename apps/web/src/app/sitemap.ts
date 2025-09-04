import type { MetadataRoute } from 'next';

import { payload } from '@/api';
import { SITE_URL, validLocales } from '@/utils/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Функція для отримання даних колекції для кожної локалі
  const fetchLocalizedData = async (collection: any) => {
    const results = await Promise.all(
      validLocales.map(async (locale) => {
        const { docs } = await payload.find({ collection, depth: 0, locale, limit: 0 });
        return docs.map((doc) => ({
          ...doc,
          locale,
        }));
      }),
    );
    return results.flat();
  };

  // Отримання даних для статичних сторінок
  const pages = await fetchLocalizedData('pages');

  // Отримання даних для динамічних сторінок
  // const news = await fetchLocalizedData('news');

  // Генерація URL-адрес для колекцій
  const generateUrls = (items: any[], basePath: string): MetadataRoute.Sitemap =>
    items.map((item) => {
      const localizedSlug = item.slug;
      const locale = item.locale;

      return {
        url: basePath
          ? `${SITE_URL}/${locale}/${basePath}/${localizedSlug}`
          : `${SITE_URL}/${locale}/${localizedSlug}`,
        lastModified: new Date(item.updatedAt || item.createdAt),
        changeFrequency: 'weekly',
        priority: basePath === '' ? 1 : 0.7,
      };
    });

  const pageUrls = generateUrls(pages, '');
  // const newsUrls = generateUrls(news, 'news');

  // Повертаємо об'єднаний sitemap
  // return [...pageUrls, ...newsUrls];
  return [...pageUrls];
}
