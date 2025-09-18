'use client';

import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

import styles from './Button.module.scss';

type Props = {
  asDiv?: boolean;
  copyUrl?: string;
  fullWIdth?: boolean;
  icon?: ReactNode;
  violet?: boolean;
  dark?: boolean;
  rounded?: boolean;
} & ComponentProps<'button'>;

export const Button = ({
  asDiv,
  children,
  className,
  dark,
  fullWIdth,
  icon,
  violet,
  rounded,
  ...buttonHTMLAttrs
}: Props) => {
  const Component = asDiv ? 'div' : 'button';

  return (
    <>
      <Component
        {...(buttonHTMLAttrs as Record<string, unknown>)}
        className={clsx(
          styles.wrapper,
          fullWIdth && styles.fullWidth,
          violet && styles.violet,
          rounded && styles.rounded,
          dark && styles.dark,
          className,
        )}
      >
        <Text color={'white'} className={styles['text-button']}>
          {children}
        </Text>
        {icon && icon}
      </Component>
    </>
  );
};
