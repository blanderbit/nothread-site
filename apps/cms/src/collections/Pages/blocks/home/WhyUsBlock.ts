import type { Block } from 'payload';

export const WhyUsBlock: Block = {
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
      name: 'description',
      required: true,
      localized: true,
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
  ],
  imageURL: '/admin-static/home-whyus.jpg',
  interfaceName: 'WhyUsBlockFields',
  labels: {
    plural: 'Why Us block',
    singular: 'Why Us block',
  },
  slug: 'why-us-block',
};
