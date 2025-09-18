'use client';

import type { PropsWithChildren } from 'react';

import type { Banner, Contact,Footer, Header } from '@monorepo/cms/src/payload-types';

import { GlobalsContext } from './GlobalsContext';

type GlobalsProviderProps = {
  footer: Footer;
  header: Header;
  banner: Banner;
  contacts: Contact;
};

export const GlobalsProvider = ({
  children,
  footer,
  header,
  banner,
  contacts,
}: PropsWithChildren<GlobalsProviderProps>) => {
  return (
    <GlobalsContext.Provider value={{ footer, header, banner, contacts }}>
      {children}
    </GlobalsContext.Provider>
  );
};
