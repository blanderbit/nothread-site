// storage-adapter-import-placeholder
import nodemailer from 'nodemailer';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { uk } from '@payloadcms/translations/languages/uk';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Users } from './collections/Users';
import { defaultLocale, localesPayloadConfig } from './config';
import { Footer } from './globals/Footer';
import { Header } from './globals/Header';
import { plugins } from './plugins';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical';
import { en } from '@payloadcms/translations/languages/en';

import { Contacts } from './globals/Contacts';
import { Banner } from './globals/Banner';
import { Products } from './collections/Products';
import { Solutions } from './collections/Solutions';

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    autoLogin: process.env.NODE_ENV === 'development' && {
      email: process.env.AUTOLOGIN_EMAIL ?? 'dev@payloadcms.com',
      password: process.env.AUTOLOGIN_PASSWORD ?? 'test',
    },
    dateFormat: 'dd/MM/yyyy HH:mm',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media, Pages, Products, Solutions],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
        ParagraphFeature(),
        HeadingFeature({ enabledHeadingSizes: ['h2'] }),
        BoldFeature(),
        LinkFeature(),
        UnorderedListFeature(),
        OrderedListFeature(),
        FixedToolbarFeature(),
      ];
    },
  }),
  globals: [Header, Footer, Contacts, Banner],
  async onInit(payload) {
    if (process.env.NODE_ENV !== 'production') {
      const existingUsers = await payload.find({
        collection: 'users',
        limit: 1,
      });

      if (existingUsers.docs.length === 0) {
        await payload.create({
          collection: 'users',
          data: {
            email: process.env.AUTOLOGIN_EMAIL ?? 'dev@payloadcms.com',
            password: process.env.AUTOLOGIN_PASSWORD ?? 'test',
          },
        });
      }
    }
  },
  email: process.env.SMTP_PASS
    ? nodemailerAdapter({
        defaultFromAddress: '',
        defaultFromName: '',
        transport: nodemailer.createTransport({
          auth: {
            pass: process.env.SMTP_PASS,
            user: process.env.SMTP_USER,
          },
          host: process.env.SMTP_HOST,
          port: 465,
          secure: true,
          service: 'Gmail',
          logger: true,
          debug: true,
        }),
      })
    : undefined,
  plugins: [...plugins],
  i18n: {
    supportedLanguages: {
      en: { dateFNSKey: 'en-US', translations: en.translations },
      uk: { dateFNSKey: 'uk', translations: uk.translations },
    },
  },
  localization: {
    defaultLocale,
    locales: localesPayloadConfig,
  },
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  folders: {},
});
