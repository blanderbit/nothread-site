import type { GlobalConfig } from 'payload';

import { revalidateFooter } from './hooks/revalidateFooter';

import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const Footer: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          ];
        },
      }),
      label: 'Title',
      name: 'titleFooter',
      type: 'richText',
    },
    {
      label: 'Email',
      localized: true,
      name: 'email',
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
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
  slug: 'footer',
};
