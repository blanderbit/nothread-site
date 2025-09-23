import type { Block } from 'payload';

export const AttackSolutionBlock: Block = {
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
              type: 'textarea',
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
  ],
  imageURL: '/admin-static/attack-solution.jpg',
  interfaceName: 'AttackSolutionBlockFields',
  labels: {
    plural: 'Attack Solution block',
    singular: 'Attack Solution block',
  },
  slug: 'attack-solution-block',
};
