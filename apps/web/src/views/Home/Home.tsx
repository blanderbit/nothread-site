import { RenderBlocks } from '@/components/RenderBlocks';
import type { Page } from '@monorepo/cms/src/payload-types';

import { Intro } from './Intro';

import styles from './Home.module.scss';

const homeBlocksMapper = {
  'intro-home-block': Intro,
};

export const Home = ({ homeBlocks }: Page) => {
  return (
    <main className={styles.wrapper}>
      {homeBlocks && <RenderBlocks blocks={homeBlocks} mapper={homeBlocksMapper} />}
    </main>
  );
};
