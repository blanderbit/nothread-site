import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  access: {
    read: () => true,
  },

  folders: true,

  fields: [
    {
      name: 'alt',
      required: false,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: true,
};
