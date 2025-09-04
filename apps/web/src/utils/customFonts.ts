import localFont from 'next/font/local';

const IvyPresto = localFont({
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/IvyPrestoDisplay-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/IvyPrestoDisplay-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-primary',
});

const Helvetica = localFont({
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/helvetica_regular.woff2',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-helvetica',
});

export { Helvetica, IvyPresto };
