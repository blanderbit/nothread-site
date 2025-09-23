'use client';

import Link from 'next/link';

import { CMSLink } from '@/components/CMSLink';
import { CMSMedia } from '@/components/CMSMedia';
import { Container } from '@/components/Container';
import { Email } from '@/components/Email';
import { Text } from '@/components/Text';
import { useGlobals } from '@/contexts/GlobalsContext';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { footer, contacts } = useGlobals();

  const { cookies, logo, logoGoogle, logoGrow, privacyPolicy, terms, navItems, bgImage } = footer;

  const { socialLinks, address, email, gMapLink } = contacts;

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <CMSMedia resource={bgImage} className={styles['bg-image']} />
      <Container wide>
        <div className={styles['logo-wrapper']}>
          <Link href={'/'}>
            <CMSMedia resource={logo} className={styles['logo']} />
          </Link>
        </div>
        <div className={styles['content-wrapper']}>
          <div className={styles['left']}>
            <div className={styles['email-wrapper']}>
              <Email
                email={email}
                type='p1'
                color='light-violet'
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='27'
                    height='27'
                    viewBox='0 0 27 27'
                    fill='none'
                  >
                    <path
                      d='M6.05085 19.5372L7.29395 20.7803L19.7249 8.34928L18.4818 7.10618L6.05085 19.5372Z'
                      fill='#E5E1FF'
                    />
                    <path d='M18.0339 7.03858V20.2236H19.7919V7.03858H18.0339Z' fill='#E5E1FF' />
                    <path d='M6.60742 7.03887V8.79688H19.7925V7.03887H6.60742Z' fill='#E5E1FF' />
                  </svg>
                }
              />
            </div>
            <div className={styles['social-wrapper']}>
              {socialLinks.map(({ link, logo, id }) => (
                <Link href={link} key={id} className={styles['socials-link']}>
                  <CMSMedia className={styles['social-logo']} resource={logo} />
                </Link>
              ))}
            </div>
            <div className={styles['address-wrapper']}>
              <a href={gMapLink} target='_blank' rel='noopener noreferrer'>
                <Text type='p2' color='light-violet' className={styles.text}>
                  {address}
                </Text>
              </a>
            </div>
          </div>
          <div className={styles['right']}>
            {navItems?.map(({ link, id, isSubmenu, submenu }) => (
              <div className={styles['nav-item']} key={id}>
                <CMSLink {...link}>
                  <Text type='h4' color='light-violet'>
                    {link.label}
                  </Text>
                </CMSLink>
                <div className={styles['submenu-wrapper']}>
                  {isSubmenu &&
                    submenu?.map(({ link, id }) => (
                      <CMSLink key={id} {...link}>
                        <Text type='p2' color='light-violet'>
                          {link.label}
                        </Text>
                      </CMSLink>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['bottom-wrapper']}></div>
      </Container>
    </footer>
  );
};
