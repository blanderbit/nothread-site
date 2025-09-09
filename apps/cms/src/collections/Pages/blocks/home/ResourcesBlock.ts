import type { Block } from 'payload';

export const ResourcesBlock: Block = {
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
          ],
          type: 'row',
        },
      ],
      label: 'Resources',
      labels: {
        plural: 'Resources',
        singular: 'Resource',
      },
      required: true,
      name: 'resourcesList',
      type: 'array',
    },
  ],
  imageURL: '/admin-static/home-resources.jpg',
  interfaceName: 'ResourcesBlockFields',
  labels: {
    plural: 'Resources block',
    singular: 'Resources block',
  },
  slug: 'resources-home-block',
};
