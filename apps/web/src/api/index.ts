import type { Config } from '@monorepo/cms/src/payload-types';

import { PayloadApiClient } from '@payload-enchants/sdk';

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

if (!cmsUrl) {
  throw new Error('❌ NEXT_PUBLIC_CMS_URL is not set — cannot initialize Payload API client');
}

 
// @ts-ignore
export const payload = new PayloadApiClient<Config>({
  apiURL: `${cmsUrl}/api`,
  fetcher: (url, init) => fetch(url, { ...(init ?? {}), next: { tags: ['tag'] } }),
});
