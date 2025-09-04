'use client';

import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { scrollToAnchor } from '@/utils/common';
import type { Form, Page } from '@monorepo/cms/src/payload-types';

import { FeedbackModal } from '../FeedbackModal';
import { LocalizedLink } from '../LocalizedLink';

export type CMSLinkType = {
  appearance?: 'inline';
  children?: React.ReactNode;
  className?: string;
  label?: null | string;
  newTab?: boolean | null;
  reference?: {
    relationTo: 'pages' | 'posts' | 'forms';
    value: Page | number | string;
  } | null;
  form?: (string | null) | Form;
  type?: 'custom' | 'reference' | 'form' | null;
  url?: null | string;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const { appearance = 'inline', children, className, newTab, reference, type, url } = props;

  const pathname = usePathname();

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug === 'home' ? '' : reference.value.slug
        }`
      : url;

  if (type === 'form') {
    return (
      <FeedbackModal
        trigger={<div className={className}>{children}</div>}
        form={props.form as Form}
      />
    );
  }

  if (!href) return <div>{children}</div>;

  const anchorIndex = href.indexOf('#');

  const anchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (anchorIndex !== -1) {
      const [basePath, anchorId] = href.split('#');

      // Якщо ми вже на потрібній сторінці
      if (pathname === basePath || (basePath === '' && pathname === '/')) {
        e.preventDefault();
        scrollToAnchor(anchorId);
      }
      // Інакше нічого не робимо -> браузер/Next.js сам зробить перехід на /about#our-mission
    }
  };

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {};

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <LocalizedLink
        onClick={anchorClick}
        className={clsx(className)}
        href={href || url || ''}
        {...newTabProps}
      >
        {children && children}
      </LocalizedLink>
    );
  }

  return (
    <LocalizedLink className={clsx(className)} href={href || url || ''} {...newTabProps}>
      {children && children}
    </LocalizedLink>
  );
};
