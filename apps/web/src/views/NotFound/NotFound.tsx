import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { LocalizedLink } from '@/components/LocalizedLink';
import { Text } from '@/components/Text';

import styles from './NotFound.module.scss';

type Props = {
  className?: string;
};

export const NotFound = ({ className }: Props) => {
  const t = useTranslations('common');
  return (
    <main className={clsx(styles.wrapper, className)}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <Text type='h2' className={styles.description}>
            {t('pade_not_found')}
          </Text>
          <LocalizedLink href={'/'}>
            <Button asDiv>{t('to_main_page')}</Button>
          </LocalizedLink>
        </div>
      </Container>
    </main>
  );
};
