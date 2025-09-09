import type { Block } from 'payload';

export const QuotesBlock: Block = {
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
              label: 'Quote',
              name: 'quote',
              required: true,
              localized: true,
              type: 'textarea',
            },
            {
              label: 'Author',
              name: 'author',
              required: true,
              localized: true,
              type: 'text',
            },
            {
              label: 'Position',
              name: 'position',
              required: true,
              localized: true,
              type: 'text',
            },
            {
              label: 'Logo Company',
              name: 'logo',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
          ],
          type: 'row',
        },
      ],
      label: 'Quotes',
      labels: {
        plural: 'Quotes',
        singular: 'Quote',
      },
      required: true,
      name: 'quotesList',
      type: 'array',
    },
  ],
  imageURL: '/admin-static/home-quotes.jpg',
  interfaceName: 'QuotesBlockFields',
  labels: {
    plural: 'Quotes block',
    singular: 'Quotes block',
  },
  slug: 'quotes-block',
};
