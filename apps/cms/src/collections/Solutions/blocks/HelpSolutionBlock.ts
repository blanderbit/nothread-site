import type { Block } from 'payload';

export const HelpSolutionBlock: Block = {
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
  imageURL: '/admin-static/help-solution.jpg',
  interfaceName: 'HelpSolutionBlockFields',
  labels: {
    plural: 'Help Solution block',
    singular: 'Help Solution block',
  },
  slug: 'help-solution-block',
};
