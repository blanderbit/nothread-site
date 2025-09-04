'use client';

import type { PropsWithChildren } from 'react';

// import { RouteChangeProgress } from '@/components/RouteChangeProgress';
import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
