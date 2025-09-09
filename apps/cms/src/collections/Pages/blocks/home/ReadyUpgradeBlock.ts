import type { Block } from 'payload';

import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { link } from '@/fields/link';

export const ReadyUpgradeBlock: Block = {
  fields: [
    {
      admin: {
        description: "To highlight in red highlight the desired part of the text and press 'B'",
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()];
        },
      }),
      label: 'Title',
      name: 'title',
      localized: true,
      type: 'richText',
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
      overrides: { label: 'Schedule a Demo', name: 'scheduleDemo' },
    }),
    link({
      overrides: { label: 'Talk to an Expert', name: 'talkToExpert' },
    }),
  ],
  imageURL: '/admin-static/home-ready-upgrade.jpg',
  interfaceName: 'ReadyUpgradeBlockFields',
  labels: {
    plural: 'Ready Upgrade block',
    singular: 'Ready Upgrade block',
  },
  slug: 'ready-upgrade-block',
};
