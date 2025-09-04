import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { match } from 'ts-pattern';

import { payload } from '@/api';
import { generatePageMetadata } from '@/utils/seoUtils';
import { Home } from '@/views/Home';
import type { Config } from '@monorepo/cms/src/payload-types';

const getPageBySlug = cache(async (slug: string, locale: Config['locale']) => {
  const { docs } = await payload.find({
    collection: 'pages',
    locale,
    where: {
      slug: {
        equals: slug ? slug : 'home',
      },
    },
  });

  if (!docs[0]) return notFound();

  return docs[0];
});

type Props = {
  params: Promise<{ slug?: string; locale: Config['locale'] }>;
};

export const dynamic = 'force-dynamic';

// Metadata generation
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug, locale } = await params;

  const doc = await getPageBySlug(slug as string, locale);

  return generatePageMetadata({ doc, basePath: '/' });
};

export const runtime = 'edge';

// Main page component
export default async function Page({ params }: Props) {
  const { slug, locale } = await params;
  const page = await getPageBySlug(slug as string, locale);

  return match(page.viewType)
    .with('home', () => {
      return <Home {...page} />;
    })
    .with('information', () => <h2>Privacy</h2>)
    .otherwise(() => null);
}
