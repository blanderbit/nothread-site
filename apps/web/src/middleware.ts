import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@monorepo/cms/src/config';

const i18nMidleware = createMiddleware({
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,

  localeDetection: false,
  localePrefix: 'as-needed',
  // A list of all locales that are supported
  locales,
});

export default function middleware(request: NextRequest) {
  return i18nMidleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)

  matcher: ['/((?!_next/static|sitemap|robots|api|icons|_next/image|img/|favicon.ico).*)'],
  // matcher: ['/', '/(ua|en)/:path*']
};
