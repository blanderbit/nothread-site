import type { CollectionConfig } from 'payload';

import { seoFields } from '@/fields/seo';
import { slugField } from '@/fields/slug';
import { slugBeforeRead } from '@/hooks/getSlugs';
import { populatePublishedAt } from '@/hooks/populatePublishedAt';

import { GlobalTrustBlock } from './blocks/home/GlobalTrustBlock';
import { IntroBlock } from './blocks/home/IntroBlock';
import { PreventsAttacksBlock } from './blocks/home/PreventsAttacksBlock';
import { QuotesBlock } from './blocks/home/QuotesBlock';
import { ReadyUpgradeBlock } from './blocks/home/ReadyUpgradeBlock';
import { ResourcesBlock } from './blocks/home/ResourcesBlock';
import { SolutionBlock } from './blocks/home/SolutionBlock';
import { TailoredProtectionBlock } from './blocks/home/TailoredProtectionBlock';
import { WhyUsBlock } from './blocks/home/WhyUsBlock';
import { revalidatePage } from './hooks/revalidatePage';

import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const Pages: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
  },
  fields: [
    {
      tabs: [
        {
          fields: [
            {
              fields: [
                {
                  admin: {
                    width: '50%',
                  },
                  label: 'Title',
                  localized: true,
                  name: 'title',
                  required: true,
                  type: 'text',
                },
                {
                  admin: {
                    width: '50%',
                  },
                  defaultValue: 'home',
                  label: 'Page template',
                  name: 'viewType',
                  options: [
                    {
                      label: 'Main screen + blocks (main)',
                      value: 'home',
                    },
                    // {
                    //   label: 'Inner Product',
                    //   value: 'inner-product',
                    // },
                    {
                      label: 'A page with text (Privacy Policy)',
                      value: 'information',
                    },
                  ],
                  required: true,
                  type: 'select',
                },
              ],
              type: 'row',
            },
            {
              admin: {
                condition: (data) => data.viewType === 'information',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  ];
                },
              }),
              label: false,
              name: 'richText',
              type: 'richText',
            },
          ],
          label: 'Main',
        },
        {
          fields: [
            {
              admin: {
                condition: (data) => data.viewType === 'home',
              },
              blocks: [
                IntroBlock,
                GlobalTrustBlock,
                PreventsAttacksBlock,
                QuotesBlock,
                TailoredProtectionBlock,
                SolutionBlock,
                WhyUsBlock,
                ReadyUpgradeBlock,
                ResourcesBlock,
              ],
              label: 'Blocks',
              labels: {
                plural: 'Blocks',
                singular: 'Block',
              },
              name: 'homeBlocks',
              type: 'blocks',
            },
            // {
            //   admin: {
            //     condition: (data) => data.viewType === 'inner-product',
            //   },
            //   blocks: [],
            //   label: 'Blocks',
            //   labels: {
            //     plural: 'Blocks',
            //     singular: 'Block',
            //   },
            //   name: 'innerProductBlocks',
            //   type: 'blocks',
            // },
            {
              admin: {
                condition: (data) => data.viewType === 'information',
              },
              label: 'Text',
              localized: true,
              name: 'privacyText',
              type: 'richText',
            },
          ],
          label: 'Content',
        },
        seoFields,
      ],
      type: 'tabs',
    },
    ...slugField(),
  ],
  hooks: {
    beforeRead: [slugBeforeRead] as any,
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  labels: {
    plural: 'Pages',
    singular: 'Page',
  },
  slug: 'pages',
};
