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
          fields: [
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
                    label: 'Submenu (Link)',
                  },
                }),
              ],
              type: 'array',
              name: 'submenu',
              required: true,
              label: 'Submenu',
              labels: {
                singular: 'Link',
                plural: 'Submenu',
              },
            },
            {
              type: 'checkbox',
              label: 'With all link',
              defaultValue: false,
              name: 'allLink',
            },
            link({
              appearances: false,
              overrides: {
                label: 'All link',
                admin: {
                  condition: (_data: any, siblingData: any) => siblingData.allLink,
                },
              },
            }),
          ],
          admin: {
            condition: (_data, siblingData) => siblingData.isSubmenu,
          },
          label: 'Submenu block',
          name: 'submenuGroup',
          type: 'group',
        },
      ],
      label: 'Navigation List',
      labels: {
        plural: 'Navigation List',
        singular: 'Menu Item',
      },
      name: 'navItems',
      required: true,
      type: 'array',
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
  slug: 'header',
};
