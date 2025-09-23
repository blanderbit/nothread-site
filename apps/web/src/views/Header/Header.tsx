'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
// import { useTranslations } from 'next-intl';
import { Close } from '@radix-ui/react-dialog';

import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';
import { CMSLink } from '@/components/CMSLink';
import { CMSMedia } from '@/components/CMSMedia';
import { Container } from '@/components/Container';
import { Modal } from '@/components/Modal';
import { Responsive } from '@/components/Responsive';
// import { SelectLanguage } from '@/components/SelectLanguage';
import { Text } from '@/components/Text';
import { useGlobals } from '@/contexts/GlobalsContext';

import styles from './Header.module.scss';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const [isScrolled, setScroll] = useState(false);

  const { header, contacts } = useGlobals();

  const { socialLinks } = contacts;

  const { link, logo, navItems } = header;

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(styles.wrapper, {
        [styles.modalOpen]: openModal,
        [styles.scrolled]: isScrolled,
      })}
    >
      <Container>
        <div className={styles['content-wrapper']}>
          <div className={styles['left']}>
            <Link href={'/'}>
              <CMSMedia resource={logo} className={styles['logo']} />
            </Link>
          </div>
          <div className={styles['right']}>
            <Responsive showFrom='laptop'>
              <nav className={styles.list}>
                {navItems?.map(({ link, isSubmenu, submenuGroup, id }) => {
                  const allLink = submenuGroup?.link;
                  const withAllLink = submenuGroup?.allLink;
                  return (
                    <div
                      key={id}
                      className={clsx(styles.listItem, isSubmenu && styles.withSubMenu)}
                    >
                      <CMSLink
                        {...link}
                        className={clsx(styles.link, !isSubmenu && styles.linkWithoutSubMenu)}
                      >
                        <Text className={styles.text} type='p2' color='white'>
                          {link.label}
                        </Text>
                      </CMSLink>
                      {isSubmenu && (
                        <>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='11'
                            height='8'
                            viewBox='0 0 11 8'
                            fill='none'
                            className={styles.iconDown}
                          >
                            <path
                              d='M4.46844 0.432313L0.847656 0.45154L5.26764 7.39844L6.39059 7.39844L10.8477 0.398439L7.26934 0.417441L6.64726 1.39442L5.08103 1.39442L4.46844 0.432313Z'
                              fill='#7F58FF'
                            />
                          </svg>
                          <div className={styles['custom-wrapper']}>
                            <ul className={styles.subMenu}>
                              {submenuGroup?.submenu?.map(({ link, id }) => (
                                <li key={id} className={styles.subMenuItem}>
                                  <CMSLink {...link} className={styles.subMenuLink}>
                                    <Text type='p2' color='white' className={styles.subMenuText}>
                                      {link.label}
                                    </Text>
                                  </CMSLink>
                                </li>
                              ))}
                              {withAllLink && (
                                <div className={styles['all-wrapper']}>
                                  <CMSLink {...allLink}>
                                    <Text type='p2' color='text'>
                                      {allLink?.label}
                                    </Text>
                                  </CMSLink>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='19'
                                    height='16'
                                    viewBox='0 0 19 16'
                                    fill='none'
                                  >
                                    <path
                                      d='M11.6215 0.545593L18.5158 7.43988C18.6564 7.58054 18.7354 7.7713 18.7354 7.97021C18.7354 8.16913 18.6564 8.35989 18.5158 8.50054L11.6215 15.3948C11.4808 15.5355 11.29 15.6145 11.0911 15.6145C10.8922 15.6145 10.7015 15.5355 10.5608 15.3948C10.4202 15.2542 10.3411 15.0634 10.3411 14.8645C10.3411 14.6656 10.4202 14.4748 10.5608 14.3342L16.175 8.71997L1.01486 8.72063C0.81584 8.72063 0.624969 8.64157 0.484238 8.50084C0.343508 8.36011 0.264446 8.16924 0.264446 7.97021C0.264446 7.77119 0.343508 7.58032 0.484238 7.43959C0.624969 7.29886 0.81584 7.2198 1.01486 7.2198L16.175 7.22046L10.5608 1.60625C10.4202 1.4656 10.3411 1.27484 10.3411 1.07592C10.3411 0.877011 10.4202 0.686246 10.5608 0.545593C10.7015 0.404941 10.8922 0.325923 11.0911 0.325923C11.29 0.325923 11.4808 0.404941 11.6215 0.545593Z'
                                      fill='#7F58FF'
                                    />
                                  </svg>
                                </div>
                              )}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </nav>
            </Responsive>
            <CMSLink {...link}>
              <Button violet>{link.label}</Button>
            </CMSLink>
            <Responsive hideFrom='laptop'>
              <div
                className={clsx(styles['btn-menu'], { [styles.active]: openModal })}
                onClick={() => setOpenModal((prev) => !prev)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Responsive>
          </div>
        </div>
      </Container>
      <Modal
        open={openModal}
        onOpenChange={setOpenModal}
        className={styles['modal']}
        contentClassName={styles['modal-content']}
        centeredContent={false}
      >
        <div className={styles['content-wrapper']}>
          <div className={styles['left']}>
            <Link href={'/'}>
              <CMSMedia resource={logo} className={styles['logo']} />
            </Link>
          </div>
          <div className={styles['right']}>
            <CMSLink {...link}>
              <Button violet>{link.label}</Button>
            </CMSLink>

            <div
              className={clsx(styles['btn-menu'], { [styles.active]: openModal })}
              onClick={() => setOpenModal((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles['menu-modal-wrapper']}>
          <Accordion
            list={navItems.filter((item) => item.isSubmenu && item.id)}
            className={styles.accordionWrapper}
            classNameTrigger={styles.accordionTrigger}
            renderTrigger={(item) => (
              <div className={styles['modal-title-wrapper']}>
                <Text type='h1' tag='h2' color='text'>
                  {item.link.label}
                </Text>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='13'
                  height='11'
                  viewBox='0 0 13 11'
                  fill='none'
                  className={styles.arrowIcon}
                >
                  <path d='M6.5 10.5L0.870833 0.750001L12.1292 0.75L6.5 10.5Z' fill='#7F58FF' />
                </svg>
              </div>
            )}
            renderContent={(item) => (
              <div className={styles['menu-modal-inner-wrapper']}>
                {item.submenuGroup?.submenu?.map(({ link, id }) => (
                  <CMSLink key={id} {...link}>
                    <Close asChild>
                      <Text type='h4' color='text'>
                        {link.label}
                      </Text>
                    </Close>
                  </CMSLink>
                ))}
              </div>
            )}
          />
          {navItems
            .filter((item) => !item.isSubmenu)
            .map(({ link, id }) => (
              <CMSLink {...link} className={styles['menu-modal-item']} key={id}>
                <Close asChild>
                  <Text color='text' type='h1' tag='h2'>
                    {link.label}
                  </Text>
                </Close>
              </CMSLink>
            ))}
        </div>
        <div className={styles['socials-links']}>
          {socialLinks.map(({ link, logo, id }) => (
            <Link href={link} key={id} className={styles['socials-link']}>
              <CMSMedia className={styles['social-logo']} resource={logo} />
            </Link>
          ))}
        </div>
      </Modal>
    </header>
  );
};
