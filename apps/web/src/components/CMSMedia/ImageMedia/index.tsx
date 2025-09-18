'use client';

import React from 'react';
import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import NextImage from 'next/image';

import { getServerSideURL } from '@monorepo/cms/src/utilites/getURL';

import type { Props as MediaProps } from '../types';

// export const cssVariables = {
//   breakpoints: {
//     // '2xl': 1536,
//     // '3xl': 1920,
//     // lg: 1024,
//     // md: 768,
//     // sm: 640,
//     // xl: 1280,
//   },
// };

// const { breakpoints } = cssVariables;

// A base64 encoded image to use as a placeholder while the image is loading

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    className,
    loading: loadingFromProps,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
  } = props;

  let width: number | undefined;

  let height: number | undefined;

  let alt = altFromProps;

  let src: StaticImageData | string = srcFromProps || '';

  if (!src && resource && typeof resource === 'object') {
    const {
      alt: altFromResource,
      // filename: fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource;

    width = fullWidth!;
    height = fullHeight!;
    alt = altFromResource || '';

    src = `${getServerSideURL()}${url}`;
  }

  const loading = loadingFromProps || 'lazy';

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps;
  // ? sizeFromProps
  // : Object.entries(breakpoints)
  //     .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
  //     .join(', ');

  return (
    <NextImage
      alt={alt || ''}
      // blurDataURL={''}
      className={clsx(className)}
      fill={fill}
      height={!fill ? height : undefined}
      loading={loading}
      // placeholder='blur'
      priority={priority}
      quality={85}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  );
};
