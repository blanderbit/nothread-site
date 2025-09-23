import type { Block } from 'payload';

export const PreventsAttacksBlock: Block = {
  fields: [
    {
      label: 'Title',
      localized: true,
      name: 'title',
      required: true,
      type: 'textarea',
    },

    {
      label: 'image',
      name: 'image',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  imageURL: '/admin-static/home-prevents.jpg',
  interfaceName: 'PreventsAttacksBlockFields',
  labels: {
    plural: 'Prevents Attacks block',
    singular: 'Prevents Attacks block',
  },
  slug: 'prevents-attacks-block',
};
