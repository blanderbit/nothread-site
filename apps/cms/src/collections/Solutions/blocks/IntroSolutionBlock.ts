import type { Block } from 'payload';

import { link } from '@/fields/link';

export const IntroSolutionBlock: Block = {
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
      label: 'Background video or image (.mp4)',
      name: 'bgVideo',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    link({
      overrides: { label: 'Book a Demo' },
    }),
  ],
  imageURL: '/admin-static/intro-solution.jpg',
  interfaceName: 'IntroSolutionBlockFields',
  labels: {
    plural: 'Intro Solution block',
    singular: 'Intro Solution block',
  },
  slug: 'intro-solution-block',
};
