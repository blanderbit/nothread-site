import type { GlobalConfig } from 'payload';

import { revalidateContacts } from './hooks/revalidateContacts';

export const Contacts: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      fields: [
        // {
        //   label: 'Phone',
        //   name: 'phone',
        //   required: true,
        //   type: 'text',
        // },
        {
          label: 'Email',
          name: 'email',
          required: true,
          type: 'text',
        },
      ],
      type: 'row',
    },
    {
      fields: [
        {
          label: 'Address',
          name: 'address',
          required: true,
          localized: true,
          type: 'text',
        },
        {
          label: 'Google Map Link',
          name: 'gMapLink',
          required: true,
          type: 'text',
        },
      ],
      type: 'row',
    },
    {
      fields: [
        {
          fields: [
            {
              label: 'Logo',
              name: 'logo',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
            {
              label: 'Link',
              name: 'link',
              required: true,
              type: 'text',
            },
          ],
          type: 'row',
        },
      ],
      label: 'Social Media Links',
      labels: {
        plural: 'Social Media Links',
        singular: 'Social Media Link',
      },
      required: true,
      name: 'socialLinks',
      type: 'array',
    },
  ],
  hooks: {
    afterChange: [revalidateContacts],
  },
  label: 'Contacts',
  slug: 'contacts',
};
