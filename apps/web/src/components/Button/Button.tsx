'use client';

import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

import styles from './Button.module.scss';

type Props = {
  asDiv?: boolean;
  copyUrl?: string;
  darkGrey?: boolean;
  fullWIdth?: boolean;
  icon?: ReactNode;
  red?: boolean;
  redBorder?: boolean;
  rounded?: boolean;
  white?: boolean;
} & ComponentProps<'button'>;

export const Button = ({
  asDiv,
  children,
  className,
  darkGrey,
  fullWIdth,
  icon,
  red,
  redBorder,
  rounded,
  white = false,
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
          white && styles.white,
          rounded && styles.rounded,
          redBorder && styles.redBorder,
          darkGrey && styles.darkGrey,
          red && styles.red,
          className,
        )}
      >
        <Text color={red ? 'milk' : 'red'} type='button'>
          {children}
        </Text>
        {icon && icon}
      </Component>
    </>
  );
};
