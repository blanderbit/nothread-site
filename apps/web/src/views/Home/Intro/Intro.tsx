'use client';

import { CMSMedia } from '@/components/CMSMedia';
import { Container } from '@/components/Container';
import RichText from '@/components/RichText';
import { Text } from '@/components/Text';
import type { IntroBlockFields } from '@monorepo/cms/src/payload-types';

import styles from './Intro.module.scss';

export const Intro = ({ bgVideo, description, advantagesList, title }: IntroBlockFields) => {
  return (
    <section className={styles.wrapper}>
      <CMSMedia resource={bgVideo} className={styles.video} />
      <Container>
        <div className={styles['content-wrapper']}>
          <div className={styles['title-wrapper']}>
            <Text type='h1' color='white'>
              {title}
            </Text>
            <div className={styles['description-wrapper']}>
              <RichText
                textType='h3'
                content={description ?? []}
                className={styles['description']}
                textColor='white'
              />
            </div>
          </div>
          <div className={styles['list-wrapper']}>
            {advantagesList.map(({ description, title, id }) => (
              <div className={styles['list-item']} key={id}>
                <Text type='p1' color='text'>
                  {title}
                </Text>
                <Text type='p2' color='text'>
                  {description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
