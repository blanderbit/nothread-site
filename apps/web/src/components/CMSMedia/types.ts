import type { ElementType, Ref } from 'react';
import type { StaticImageData } from 'next/image';

import type { Media as MediaType } from '@monorepo/cms/src/payload-types';

export type Props = {
  alt?: string;
  className?: string;
  fill?: boolean; // for NextImage only
  htmlElement?: ElementType | null;
  imgClassName?: string;
  loading?: 'eager' | 'lazy'; // for NextImage only
  onClick?: () => void;
  onLoad?: () => void;
  priority?: boolean; // for NextImage only
  ref?: Ref<HTMLImageElement | HTMLVideoElement | null>;
  resource?: MediaType | number | string; // for Payload media
  size?: string; // for NextImage only
  src?: StaticImageData; // for static media
  videoClassName?: string;
};
