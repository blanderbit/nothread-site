import type { Block } from 'payload';

export const TakeStepProductBlock: Block = {
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
      name: 'description',
      required: true,
      localized: true,
      type: 'textarea',
    },
    {
      fields: [
        {
          label: 'Text small investment',
          admin: {
            placeholder:
              'For a small investment with Nothreat, you can save on potentially crippling costs associated with the following:',
          },
          localized: true,
          name: 'text',
          required: true,
          type: 'textarea',
        },
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
  ],
  imageURL: '/admin-static/take-step-product.jpg',
  interfaceName: 'TakeStepProductBlockFields',
  labels: {
    plural: 'Take Step Product block',
    singular: 'Take Step Product block',
  },
  slug: 'take-step-product-block',
};
