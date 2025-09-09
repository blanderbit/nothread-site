import type { Block } from 'payload';

import { link } from '@/fields/link';

export const IntroProductBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      label: 'Description',
      localized: true,
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      label: 'Background video or image (.mp4)',
      name: 'bgVideo',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      fields: [
        {
          fields: [
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
              type: 'text',
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
    link({
      overrides: { label: 'Book a Demo' },
    }),
  ],
  imageURL: '/admin-static/intro-product.jpg',
  interfaceName: 'IntroProductBlockFields',
  labels: {
    plural: 'Intro Product block',
    singular: 'Intro Product block',
  },
  slug: 'intro-product-block',
};
