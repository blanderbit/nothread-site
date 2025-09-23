import type { Block } from 'payload';

import { link } from '@/fields/link';

import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const SolutionBlock: Block = {
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
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                // HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5'] }),
              ];
            },
          }),
          label: 'Description list',
          name: 'description',
          type: 'richText',
          localized: true,
        },
        {
          label: 'Image',
          name: 'image',
          relationTo: 'media',
          required: true,
          type: 'upload',
        },
        link({
          overrides: { label: 'Read more' },
        }),
      ],
      label: 'Solutions',
      labels: {
        plural: 'Solutions',
        singular: 'Solution',
      },
      required: true,
      name: 'solutionsList',
      type: 'array',
    },
  ],
  imageURL: '/admin-static/home-solution.jpg',
  interfaceName: 'SolutionsBlockFields',
  labels: {
    plural: 'Solutions block',
    singular: 'Solutions block',
  },
  slug: 'solutions-block',
};
