'use server';

import type { FormSubmission } from '@monorepo/cms/src/payload-types';

export const sendForm = async ({
  form,
  submissionData,
}: {
  form: string;
  submissionData: FormSubmission['submissionData'];
}) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/form-submissions`, {
    body: JSON.stringify({ form, submissionData }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((res) => res.json());

  return result;
};
