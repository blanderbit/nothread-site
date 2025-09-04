import type { Metadata } from 'next';

import { NotFound } from '@/views/NotFound';

export const metadata: Metadata = {
  description: '404 | Сторінку не знайдено',
  title: '404 | Сторінку не знайдено',
};

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;

export const runtime = 'edge';
