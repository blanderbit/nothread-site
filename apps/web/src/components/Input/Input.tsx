import type { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { ErrorOption } from 'react-hook-form';
import clsx from 'clsx';

import { Text } from '@/components/Text';

import styles from './Input.module.scss';

export type InputProps = {
  as?: 'input' | 'textarea';
  error?: ErrorOption;
  inputClassName?: string;
  isRequired?: boolean;
  label?: string;
} & ComponentPropsWithoutRef<'input'>;

const InputWithoutRef = (
  {
    as: As = 'input',
    className,
    error,
    inputClassName,
    isRequired,
    label,
    value,
    ...inputHTMLAttrs
  }: InputProps,

  ref: ForwardedRef<any>,
) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        className,
        isRequired && styles.isRequired,
        error && styles.isError,
      )}
    >
      <As
        className={clsx(styles.input, value && styles.hasValue, inputClassName)}
        value={value}
        {...(inputHTMLAttrs as Record<string, unknown>)}
        ref={ref}
      />
      {label && (
        <Text className={styles.label} tag='span' type='p2'>
          {label}
        </Text>
      )}
      {error?.message && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export const Input = forwardRef(InputWithoutRef);
