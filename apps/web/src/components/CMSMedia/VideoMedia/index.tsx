'use client';

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { getServerSideURL } from '@monorepo/cms/src/utilites/getURL';

import type { Props as MediaProps } from '../types';

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, className } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef;

    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      });
    }
  }, []);

  if (resource && typeof resource === 'object') {
    const { url } = resource;

    return (
      <video
        autoPlay
        className={clsx(className)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={`${getServerSideURL()}${url}`} />
      </video>
    );
  }

  return null;
};
