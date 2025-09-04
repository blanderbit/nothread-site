import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

type ContainerProps = {
  leftPadding?: boolean;
} & ComponentProps<'div'>

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, leftPadding = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.wrap, leftPadding && styles.leftPadding, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';