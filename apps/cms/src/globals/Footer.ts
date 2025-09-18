import type { GlobalConfig } from 'payload';

import { link } from '@/fields/link';

import { revalidateFooter } from './hooks/revalidateFooter';

import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const Footer: GlobalConfig = {
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
      label: 'Logo Google',
      name: 'logoGoogle',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      label: 'Logo Grow',
      name: 'logoGrow',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
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
    link({
      appearances: false,
      overrides: {
        label: 'Privacy Policy',
        name: 'privacyPolicy',
      },
    }),
    link({
      appearances: false,
      overrides: {
        label: 'Terms',
        name: 'terms',
      },
    }),
    link({
      appearances: false,
      overrides: {
        label: 'Cookies',
        name: 'cookies',
      },
    }),
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
  slug: 'footer',
};
