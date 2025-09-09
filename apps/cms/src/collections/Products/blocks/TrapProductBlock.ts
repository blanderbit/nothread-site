import type { Block } from 'payload';

import { link } from '@/fields/link';
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const TrapProductBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()];
        },
      }),
      label: 'Description',
      localized: true,
      name: 'description',
      type: 'richText',
    },

    {
      fields: [
        {
          fields: [
            {
              label: 'Icon',
              name: 'icon',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
            {
              label: 'Title',
              name: 'title',
              required: true,
              localized: true,
              type: 'text',
            },
            {
              label: 'Description',
              name: 'description',
              required: true,
              localized: true,
              type: 'textarea',
            },
          ],
          type: 'row',
        },
      ],
      label: 'Advantages',
      labels: {
        plural: 'Advantages',
        singular: 'Advantage',
      },
      required: true,
      name: 'advantagesList',
      type: 'array',
    },
    {
      fields: [
        {
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature()];
            },
          }),
          label: 'Description',
          localized: true,
          name: 'descriptionBanner',
          type: 'richText',
        },

        link({
          overrides: { label: 'Book a Demo' },
        }),
      ],
      label: 'Banner',
      type: 'group',
    },
  ],
  imageURL: '/admin-static/trap-product.jpg',
  interfaceName: 'TrapProductBlockFields',
  labels: {
    plural: 'Trap Threats Product block',
    singular: 'Trap Threats Product block',
  },
  slug: 'trap-product-block',
};
