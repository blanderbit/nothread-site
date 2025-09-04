import type { Plugin } from 'payload';

import type { Page } from '@/payload-types';
import { getServerSideURL } from '@/utilites/getURL';

import { formBuilder } from './form-builder';

import { seoPlugin } from '@payloadcms/plugin-seo';
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types';

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Nothread` : 'Nothread';
};

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilder(),
];