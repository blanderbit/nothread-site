import type { ReactNode } from 'react';
import clsx from 'clsx';

import { Copy } from '../Copy';
import { Responsive } from '../Responsive';
import type { TextType } from '../Text';
import { Text } from '../Text';

import styles from './Email.module.scss';

type Props = {
  className?: string;
  color?: 'error' | 'milk' | 'red';
  email: string;
  type?: TextType;
  icon?: ReactNode;
};

export const Email = ({ className, color, email, type, icon }: Props) => {
  return (
    <>
      <Responsive hideFrom='laptop'>
        <a className={clsx(styles.wrapper, className)} href={`mailto:${email}`}>
          <Text color={color} type={type}>
            {email}
          </Text>
          {icon && icon}
        </a>
      </Responsive>
      <Responsive showFrom='laptop'>
        <Copy className={clsx(styles.wrapper, className)} textToCopy={email}>
          <Text color={color} type={type}>
            {email}
          </Text>
          {icon && icon}
        </Copy>
      </Responsive>
    </>
  );
};
