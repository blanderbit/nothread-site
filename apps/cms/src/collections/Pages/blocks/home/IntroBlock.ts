import type { Block } from 'payload';

import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const IntroBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'textarea',
    },
    {
      admin: {
        description: "To highlight in violet highlight the desired part of the text and press 'B'",
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()];
        },
      }),
      label: 'Description',
      localized: true,
      name: 'description',
      type: 'richText',
    },

    {
      label: 'Background video or image (.mp4)',
      name: 'bgVideo',
      relationTo: 'media',
      required: true,
      type: 'upload',
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
              type: 'text',
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
  imageURL: '/admin-static/home-intro.jpg',
  interfaceName: 'IntroBlockFields',
  labels: {
    plural: 'Intro block',
    singular: 'Intro block',
  },
  slug: 'intro-home-block',
};
