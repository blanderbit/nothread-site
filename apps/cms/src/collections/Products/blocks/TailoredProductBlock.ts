import type { Block } from 'payload';

import { link } from '@/fields/link';
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const TailoderProductBlock: Block = {
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
      label: 'Description',
      localized: true,
      name: 'description',
      type: 'richText',
    },
    {
      label: 'Image',
      name: 'image',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  imageURL: '/admin-static/tailored-product.jpg',
  interfaceName: 'TailoderProductBlockFields',
  labels: {
    plural: 'Tailoder Protection Product block',
    singular: 'Tailoder Protection Product block',
  },
  slug: 'tailoder-product-block',
};
