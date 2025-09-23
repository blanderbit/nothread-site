import type { CollectionConfig } from 'payload';

import { dateField } from '@/fields/date';
import { seoFields } from '@/fields/seo';
import { slugField } from '@/fields/slug';

import { TakeStepProductBlock } from '../Products/blocks/TakeStepProductBlock';
import { AttackSolutionBlock } from './blocks/AttackSolutionBlock';
import { HelpSolutionBlock } from './blocks/HelpSolutionBlock';
import { IntroSolutionBlock } from './blocks/IntroSolutionBlock';
import { ReadySolutionBlock } from './blocks/ReadySolutionBlock';
import { WebSolutionBlock } from './blocks/WebSolutionBlock';

export const Solutions: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    preview: ({ slug }) => `${process.env.NEXT_PUBLIC_URL}/solutions/${slug}`,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              label: 'Title',
              localized: true,
              name: 'title',
              required: true,
              type: 'text',
            },
          ],
          label: 'Main',
        },
        {
          fields: [
            {
              blocks: [
                IntroSolutionBlock,
                AttackSolutionBlock,
                WebSolutionBlock,
                TakeStepProductBlock,
                HelpSolutionBlock,
                ReadySolutionBlock,
              ],
              label: 'Блоки',
              labels: {
                plural: 'Блоки',
                singular: 'Блок',
              },
              name: 'solutionBlocks',
              type: 'blocks',
            },
          ],
          label: 'Content',
        },
        seoFields,
      ],
    },
    dateField(),
    {
      admin: {
        position: 'sidebar',
      },
      label: 'Мініатюра',
      name: 'thumbnail',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    ...slugField(),
  ],
  labels: {
    plural: 'Solutions',
    singular: 'Solution',
  },
  versions: {
    drafts: true,
  },
  orderable: false,
  slug: 'solutions',
};
