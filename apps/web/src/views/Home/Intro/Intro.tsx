'use client';

// import { Button } from '@/components/Button';
import { CMSLink } from '@/components/CMSLink';
import { CMSMedia } from '@/components/CMSMedia';
import { Container } from '@/components/Container';
import type { IntroBlockFields } from '@monorepo/cms/src/payload-types';

import styles from './Intro.module.scss';

export const Intro = ({ bgVideo, description, link }: IntroBlockFields) => {
  return (
    <section className={styles.wrapper}>
      <CMSMedia resource={bgVideo} videoClassName={styles.video} />
      <Container>
        <div className={styles['content-wrapper']}>
          <div className={styles['title-wrapper']}>
            <div className={styles['middle-line']}>{description}</div>
          </div>
          <div className={styles['btn-wrapper']}>
            <CMSLink {...link}>{link.label}</CMSLink>
          </div>
        </div>
      </Container>
    </section>
  );
};
