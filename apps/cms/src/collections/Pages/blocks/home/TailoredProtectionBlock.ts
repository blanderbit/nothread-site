import { link } from '@/fields/link';
import type { Block } from 'payload';

export const TailoredProtectionBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'textarea',
    },
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
        {
          label: 'Image',
          name: 'image',
          relationTo: 'media',
          required: true,
          type: 'upload',
        },
        link({
          overrides: { label: 'Link' },
        }),
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
  ],
  imageURL: '/admin-static/home-tailored.jpg',
  interfaceName: 'TailoredProtectionBlockFields',
  labels: {
    plural: 'Tailored Protection block',
    singular: 'Tailored Protection block',
  },
  slug: 'tailored-protection-block',
};
