'use client';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { useGlobals } from '@/contexts/GlobalsContext';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { footer } = useGlobals();

  const currentYear = new Date().getFullYear();

  console.log(footer);

  return (
    <footer className={styles.wrapper}>
      <Container>
        <Text className={styles.copyright}>©{currentYear} | Company</Text>
      </Container>
    </footer>
  );
};
