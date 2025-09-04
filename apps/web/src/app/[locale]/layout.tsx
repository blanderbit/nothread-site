import clsx from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { payload } from '@/api';
import { GlobalsProvider } from '@/contexts/GlobalsContext/GlobalsProvider';
import { Helvetica, IvyPresto } from '@/utils/customFonts';
import { Layout } from '@/views/Layout';
import type { Config } from '@monorepo/cms/src/payload-types';

import '@/scss/globals.scss';

export const metadata: Metadata = {
  description: 'Nothread',
  title: 'Nothread',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Config['locale'] };
}>) {
  const [header, footer] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
  ]);

  const messages = await getMessages();

  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={clsx(Helvetica.variable, IvyPresto.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalsProvider footer={footer} header={header}>
            <Layout>{children}</Layout>
          </GlobalsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';

export const runtime = 'edge';
