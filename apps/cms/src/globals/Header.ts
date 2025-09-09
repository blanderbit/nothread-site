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
    link({
      appearances: false,
      overrides: {
        label: 'Request a Demo',
      },
    }),
    {
      admin: {
        components: {
          RowLabel: '@/fields/CustomRowLabel#CustomRowLabel',
        },
      },
      fields: [
        link({
          appearances: false,
          overrides: {
            label: 'Link',
          },
        }),
        {
          type: 'checkbox',
          label: 'Submenu',
          defaultValue: false,
          name: 'isSubmenu',
        },
        {
          admin: {
            components: {
              RowLabel: '@/fields/CustomRowLabel#CustomRowLabel',
            },
            condition: (_data, siblingData) => siblingData.isSubmenu,
          },
          fields: [
            link({
              appearances: false,
              overrides: {
                label: 'Submenu (Link)',
              },
            }),
          ],
          type: 'array',
          name: 'submenu',
          label: 'Submenu',
          labels: {
            singular: 'Link',
            plural: 'Submenu',
          },
        },
      ],
      label: 'Navigation List',
      labels: {
        plural: 'Navigation List',
        singular: 'Menu Item',
      },
      name: 'navItems',
      type: 'array',
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
  slug: 'header',
};
