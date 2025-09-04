import { defaultLocale, locales, SITE_URL } from '@/utils/config';

const removeLastSlash = (text: string) => {
  return text.endsWith('/') ? text.replace(/\/$/, '') : text;
};

const resolveAlternatesByInput = ({
  basePath,
  slugs,
}: {
  basePath: string;
  slugs?: Record<string, string>;
}) => {
  if (!basePath || !slugs) return null;

  return locales.reduce<Record<string, string>>((acc, locale) => {
    const base = `${SITE_URL}/${locale}${basePath}`;

    const slug = slugs[locale];

    const url = `${base}/${slug === 'home' ? '' : slug}`;

    acc[locale === 'ua' ? 'uk' : locale] = removeLastSlash(url);

    return acc;
  }, {});
};

type MetadataArgs = {
  doc: any;
  basePath: string;
};

export const generatePageMetadata = ({ doc, basePath }: MetadataArgs) => {
  if (!doc) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
      robots: 'noindex, nofollow',
    };
  }

  const canonicalPath = doc.slug || '';

  const image =
    doc.meta?.image && typeof doc.meta?.image === 'object' && doc.meta?.image.url
      ? doc.meta.image.url
      : `${SITE_URL}/default-image.jpg`;

  const alternates = resolveAlternatesByInput({ basePath, slugs: doc.slugs });

  const canonical =
    alternates &&
    alternates[(defaultLocale as string) === 'ua' ? 'uk' : defaultLocale].replace(
      `/${defaultLocale}`,
      '',
    );

  return {
    robots: 'noindex, nofollow',
    ...(alternates &&
      canonical && {
        alternates: {
          canonical,
          languages: alternates,
        },
      }),
    description: doc.meta?.description || 'Nothread',
    openGraph: {
      title: doc.meta?.title || 'Nothread',
      description: doc.meta?.description || 'Nothread',
      images: [
        {
          url: image,
          alt: doc.meta?.image?.alt || 'Nothread',
          width: 1200,
          height: 630,
        },
      ],
      url: `${SITE_URL}/${canonicalPath}`,
      siteName: 'Nothread',
      type: 'website',
    },
    title: doc.meta?.title || 'Nothread',
  };
};
