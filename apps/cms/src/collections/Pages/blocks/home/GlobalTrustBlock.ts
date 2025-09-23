import type { Block } from 'payload';

export const GlobalTrustBlock: Block = {
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
          label: 'Numbers',
          name: 'numbers',
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
      type: 'group',
      name: 'firstStatistic',
      required: true,
      label: 'First Card',
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
              label: 'Numbers',
              name: 'numbers',
              required: true,
              localized: true,
              type: 'text',
            },
          ],
          type: 'row',
        },
      ],
      label: 'Statistics',
      labels: {
        plural: 'Statistics',
        singular: 'Statistic',
      },
      required: true,
      name: 'statisticsList',
      type: 'array',
    },
    {
      label: 'Logo company',
      name: 'logoCompany',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  imageURL: '/admin-static/home-global-trust.jpg',
  interfaceName: 'GlobalTrustBlockFields',
  labels: {
    plural: 'Global Trust block',
    singular: 'Global Trust block',
  },
  slug: 'global-trust-block',
};
