import type { CollectionConfig } from 'payload';

import { dateField } from '@/fields/date';
import { seoFields } from '@/fields/seo';
import { slugField } from '@/fields/slug';

import { IntroProductBlock } from './blocks/IntroProductBlock';
import { StatsProductBlock } from './blocks/StatsProductBlock';
import { TailoderProductBlock } from './blocks/TailoredProductBlock';
import { TakeStepProductBlock } from './blocks/TakeStepProductBlock';
import { TrapProductBlock } from './blocks/TrapProductBlock';
import { WhyUsProductBlock } from './blocks/WhyUsProductBlock';

export const Products: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    preview: ({ slug }) => `${process.env.NEXT_PUBLIC_URL}/products/${slug}`,
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
                IntroProductBlock,
                TailoderProductBlock,
                WhyUsProductBlock,
                TrapProductBlock,
                StatsProductBlock,
                TakeStepProductBlock,
              ],
              label: 'Блоки',
              labels: {
                plural: 'Блоки',
                singular: 'Блок',
              },
              name: 'productBlocks',
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
    plural: 'Products',
    singular: 'Product',
  },
  versions: {
    drafts: true,
  },
  orderable: false,
  slug: 'products',
};
