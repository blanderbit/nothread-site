// import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

import { link } from '@/fields/link';

export const IntroBlock: Block = {
  fields: [
    // {
    //   editor: lexicalEditor({
    //     features: ({ rootFeatures }) => {
    //       return [
    //         ...rootFeatures,
    //         FixedToolbarFeature(),
    //         HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5'] }),
    //       ];
    //     },
    //   }),
    //   label: 'Title',
    //   name: 'title',
    //   type: 'richText',
    // },
    {
      label: 'Description',
      localized: true,
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      label: 'Background video (.mp4)',
      name: 'bgVideo',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    link({
      appearances: false,
    }),
  ],
  imageURL: '/admin-static/home-intro.jpg',
  interfaceName: 'IntroBlockFields',
  labels: {
    plural: 'Intro block',
    singular: 'Intro block',
  },
  slug: 'intro-home-block',
};
