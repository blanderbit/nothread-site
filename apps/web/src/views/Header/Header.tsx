'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/Container';
import styles from './Header.module.scss';
import { SelectLanguage } from '@/components/SelectLanguage';
import { useGlobals } from '@/contexts/GlobalsContext';
import { CMSMedia } from '@/components/CMSMedia';
import Link from 'next/link';
import { CMSLink } from '@/components/CMSLink';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Close } from '@radix-ui/react-dialog';
import { Accordion } from '@/components/Accordion';
import { Text } from '@/components/Text';
import { Responsive } from '@/components/Responsive';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const [isScrolled, setScroll] = useState(false);

  const { header, contacts } = useGlobals();

  const { socialLinks } = contacts;

  const { link, logo, navItems } = header;

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
                              {withAllLink && <CMSLink {...allLink}>{allLink?.label}</CMSLink>}
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
