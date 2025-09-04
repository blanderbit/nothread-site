import type { CollectionConfig } from 'payload';

import { onFormSubmissionCreate } from '../hooks/onFormSubmissionCreate';

export const FormSubmissions: CollectionConfig = {
  access: {
    create: () => true,
  },
  fields: [
    {
      label: 'Form',
      name: 'form',
      relationTo: 'forms',
      required: true,
      type: 'relationship',
    },
    {
      fields: [
        {
          label: 'Field name',
          name: 'field',
          required: true,
          type: 'text',
        },
        {
          label: 'Field value',
          name: 'value',
          type: 'text',
        },
      ],
      label: 'Submission data',
      name: 'submissionData',
      required: true,
      type: 'array',
    },
  ],
  hooks: {
    afterChange: [onFormSubmissionCreate],
  },
  labels: {
    plural: 'Form submissions',
    singular: 'Form submission',
  },
  slug: 'form-submissions',
};
