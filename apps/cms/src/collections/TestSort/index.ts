import type { CollectionConfig } from 'payload';

import { slugField } from '@/fields/slug';

export const TestSort: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Категорії',
    useAsTitle: 'title',
  },
  fields: [
    {
      fields: [
        {
          label: 'Заголовок',
          localized: true,
          name: 'title',
          required: true,
          type: 'text',
        },
      ],
      type: 'row',
    },
    ...slugField(),
  ],
  labels: {
    plural: 'TestSort',
    singular: 'TestSort',
  },
  orderable: true,
  slug: 'test-sort',
};
