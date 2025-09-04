import type { ComponentProps, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Text.module.scss';

type TextTag =
  | 'a'
  | 'article'
  | 'blockquote'
  | 'button'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'ol'
  | 'p'
  | 'span'
  | 'ul';

export type TextType = 'button' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p1' | 'p2' | 'p3' | 'p4';

const textTypeTagMapper: Record<TextType, TextTag> = {
  button: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p1: 'p',
  p2: 'p',
  p3: 'p',
  p4: 'p',
};

export type TextProps = {
  align?: 'center' | 'end' | 'start';
  className?: string;
  color?: 'error' | 'milk' | 'red';
  fontWeight?: '300' | '400';
  html?: string;
  tag?: TextTag;
  type?: TextType;
} & ComponentProps<'h1'>;

export const Text = ({
  align,
  children,
  className,
  color,
  fontWeight,
  html,
  tag,
  type,
  ...props
}: PropsWithChildren<TextProps>) => {
  const ComponentTag: TextTag =
    tag ?? textTypeTagMapper[type as keyof typeof textTypeTagMapper] ?? 'span';

  return (
    <ComponentTag
      {...(props as Record<string, unknown>)}
      className={clsx(
        styles.wrapper,
        type && styles[type],
        color && styles[`color-${color}`],
        align && styles[`align-${align}`],
        fontWeight && styles[`fontWeight-${fontWeight}`],
        className,
      )}
      {...(html && {
        dangerouslySetInnerHTML: {
          __html: html,
        },
      })}
    >
      {children}
    </ComponentTag>
  );
};
