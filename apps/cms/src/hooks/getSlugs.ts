import type { BeforeReadHook } from 'node_modules/payload/dist/globals/config/types';

export const slugBeforeRead: BeforeReadHook = ({ doc }) => {
  return {
    ...doc,
    slugs: doc.slug,
  };
};
