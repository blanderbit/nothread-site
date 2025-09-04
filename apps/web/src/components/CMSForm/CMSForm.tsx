'use client';

// import type { Form } from '@monorepo/cms';
// import { Text } from '../Text';
import { useState } from 'react';
// import type { Form } from 'payload-types';
import { Controller, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { match } from 'ts-pattern';

// import { sendForm } from '@/actions/sendForm';
import { sendForm } from '@/actions/createFormSubmission';
import type { Form } from '@monorepo/cms/src/payload-types';

import { Button } from '../Button';
// import { createFormSubmission } from '@/actions/createFormSubmission';
// import { useGlobals } from '@/contexts/GlobalsContext';
// import { Link } from '@/utils/navigation';
import { Input } from '../Input';
import { Text } from '../Text';
// import { PhoneInput } from '../PhoneInput';
import { Textarea } from '../Textarea';

import styles from './CMSForm.module.scss';

type Props = {
  additionalField?: {
    field: string;
    value: string;
  };
  className?: string;
  isModal?: boolean;
  // setIsOpenConfirmationMessage: React.Dispatch<React.SetStateAction<boolean>>;
} & Form;

export const CMSForm = ({
  className,
  fields,
  id,
  submitButtonLabel,
  isModal,
  successMessage,
}: Props) => {
  const t = useTranslations('form');
  const [isSuccessSubmitted, setSuccessSubmitted] = useState(false);
  const {
    control,
    // formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<Record<string, string>>({
    defaultValues: fields.reduce<Record<string, string>>((acc, field) => {
      acc[field.name] = '';

      return acc;
    }, {}),
  });

  const onSubmit = handleSubmit(async (data) => {
    const submissionData = Object.entries(data).map(([field, value]) => ({
      field,
      value,
    }));

    await sendForm({ form: id, submissionData });
    setSuccessSubmitted(true);
    // setIsOpenConfirmationMessage(true);
    // setTimeout(() => setIsOpenConfirmationMessage(false), 3000);
    reset();
  });

  const requiredRule = (isRequired: boolean) => ({
    message: t('required_filed'),
    value: isRequired,
  });

  return (
    <>
      {isSuccessSubmitted ? (
        <Text type='p1'>{successMessage}</Text>
      ) : (
        <form className={clsx(styles.wrapper, className)} id='form' onSubmit={onSubmit}>
          <div className={styles.fields}>
            <div className={clsx(styles.fieldsWrapper, isModal && styles.isModal)}>
              {fields.map((field) =>
                match(field)
                  .with({ blockType: 'text' }, ({ id, isRequired, label, name }) => (
                    <Controller
                      control={control}
                      key={id}
                      name={name}
                      render={({
                        field: { name, onBlur, onChange, value },
                        fieldState: { error },
                      }) => (
                        <Input
                          error={error}
                          isRequired={isRequired}
                          key={id}
                          label={label ?? name}
                          onBlur={onBlur}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                      rules={{
                        required: requiredRule(isRequired),
                      }}
                    />
                  ))
                  .with({ blockType: 'email' }, ({ id, isRequired, label, name }) => (
                    <Controller
                      control={control}
                      key={id}
                      name={name}
                      render={({
                        field: { name, onBlur, onChange, value },
                        fieldState: { error },
                      }) => (
                        <Input
                          className={styles.email}
                          error={error}
                          isRequired={isRequired}
                          key={id}
                          label={label ?? name}
                          onBlur={onBlur}
                          onChange={onChange}
                          value={value}
                          type='email'
                        />
                      )}
                      rules={{
                        pattern: {
                          message: t('incorrect_email'),
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                        required: requiredRule(isRequired),
                      }}
                    />
                  ))
                  .with({ blockType: 'phone-number' }, ({ id, isRequired, label, name }) => (
                    <Controller
                      control={control}
                      key={id}
                      name={name}
                      render={({
                        field: { name, onBlur, onChange, value },
                        fieldState: { error },
                      }) => {
                        return (
                          <Input
                            className={styles.email}
                            error={error}
                            isRequired={isRequired}
                            key={id}
                            label={label ?? name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            type='tel'
                          />
                        );
                      }}
                      rules={{
                        pattern: {
                          message: t('incorrect_phone'),
                          value: /^\+?(\d{1,3})?[-. (]?(\d{3})[-. )]?(\d{3})[-. ]?(\d{4})$/,
                        },
                        maxLength: {
                          message: t('incorrect_phone'),
                          value: 15,
                        },
                        minLength: {
                          message: t('incorrect_phone'),
                          value: 8,
                        },
                        required: requiredRule(isRequired),
                      }}
                    />
                  ))
                  .with({ blockType: 'message' }, ({ id, isRequired, label, name }) => (
                    <Controller
                      control={control}
                      key={id}
                      name={name}
                      render={({
                        field: { name, onBlur, onChange, value },
                        fieldState: { error },
                      }) => (
                        <Textarea
                          className={styles.textarea}
                          error={error}
                          key={id}
                          label={label ?? ''}
                          name={name}
                          onBlur={onBlur}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                      rules={{
                        required: requiredRule(isRequired),
                      }}
                    />
                  ))
                  .exhaustive(),
              )}
            </div>
            <Button type='submit' fullWIdth>
              {submitButtonLabel}
            </Button>
          </div>
        </form>
      )}
    </>
  );
};
