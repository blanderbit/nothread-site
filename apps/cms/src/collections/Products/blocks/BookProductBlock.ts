import type { Block } from 'payload';

import { link } from '@/fields/link';

export const BookProductBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'textarea',
    },
    {
      label: 'Description',
      localized: true,
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      label: 'Icon',
      name: 'icon',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    link({
      overrides: { label: 'Book a Demo' },
    }),
  ],
  imageURL: '/admin-static/book-product.jpg',
  interfaceName: 'BookProductBlockFields',
  labels: {
    plural: 'Book Product block',
    singular: 'Book Product block',
  },
  slug: 'book-product-block',
};
