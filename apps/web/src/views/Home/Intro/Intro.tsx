'use client';

// import { Button } from '@/components/Button';
import { CMSLink } from '@/components/CMSLink';
import { CMSMedia } from '@/components/CMSMedia';
import { Container } from '@/components/Container';
import type { IntroBlockFields } from '@monorepo/cms/src/payload-types';

import styles from './Intro.module.scss';

export const Intro = ({ bgVideo, description, advantagesList, title }: IntroBlockFields) => {
  return (
    <section className={styles.wrapper}>
      <CMSMedia resource={bgVideo} className={styles.video} />
      <Container>
        <div className={styles['content-wrapper']}>
          <div className={styles['title-wrapper']}></div>
        </div>
      </Container>
    </section>
  );
};
