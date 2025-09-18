import type { Block } from 'payload';

import { link } from '@/fields/link';

import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const WebSolutionBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()];
        },
      }),
      label: 'Description left',
      localized: true,
      name: 'descriptionLeft',
      type: 'richText',
    },
    {
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()];
        },
      }),
      label: 'Description Right',
      localized: true,
      name: 'descriptionRight',
      type: 'richText',
    },
    {
      label: 'Background image',
      name: 'bgImage',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    link({
      overrides: { label: 'Book a Demo' },
    }),
  ],
  imageURL: '/admin-static/web-solution.jpg',
  interfaceName: 'WebSolutionBlockFields',
  labels: {
    plural: 'Web Security Solution block',
    singular: 'Web Security Solution block',
  },
  slug: 'web-solution-block',
};
