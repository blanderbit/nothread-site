'use client';

import { useTranslations } from 'next-intl';

import { Container } from '@/components/Container';
import { SelectLanguage } from '@/components/SelectLanguage';

// import { useGlobals } from '@/contexts/GlobalsContext';
import styles from './Header.module.scss';

export const Header = () => {
  const t = useTranslations();
  // const { header } = useGlobals();

  return (
    <header className={styles.wrapper}>
      <Container>
        <SelectLanguage />
        header
        {t('home.test')}
      </Container>
    </header>
  );
};
