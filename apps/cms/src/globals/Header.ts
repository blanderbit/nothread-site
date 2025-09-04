import type { GlobalConfig } from 'payload';

import { link } from '@/fields/link';

import { revalidateHeader } from './hooks/revalidateHeader';

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Logo',
      name: 'logo',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    {
      fields: [
        link({
          appearances: false,
        }),
      ],
      label: 'Navigation',
      maxRows: 6,
      name: 'navItems',
      type: 'array',
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
  slug: 'header',
};
