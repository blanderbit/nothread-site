import type { Block } from 'payload';

import { link } from '@/fields/link';

export const ReadySolutionBlock: Block = {
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
      label: 'Image',
      name: 'image',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    link({
      overrides: { label: 'Book a Demo' },
    }),
  ],
  imageURL: '/admin-static/ready-solution.jpg',
  interfaceName: 'ReadySolutionBlockFields',
  labels: {
    plural: 'Ready Solution block',
    singular: 'Ready Solution block',
  },
  slug: 'ready-solution-block',
};
