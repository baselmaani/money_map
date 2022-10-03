import React, { useState, useTransition } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Container,
} from 'reactstrap';
import { GrSend } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import styles from './Navbar.module.css';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import Link from 'next/link';
import Head from 'next/head';
import { SiGoogletranslate } from 'react-icons/si';
import LanguageDropdown from './LanguageDropDown';
import RightSection from './RightSection';

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <>
      <Navbar light expand='md'>
        <NavbarBrand href={{ pathname: '/', query: query }}>
          <img src='moneyMapLogo.png' className={styles.logoImage} />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar style={{ width: '100%' }}>
            <div className={styles.navItemsContainer}>
              <div>
                <NavItem>
                  <Link href={{ pathname: '/', query: query }}>
                    <NavLink className={styles.link}>{t('home')}</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    {t('About')}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link href={{ pathname: '/about', query: query }}>
                        <span className={styles.sublink}>{t('about-us')}</span>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link href={{ pathname: '/portfolio', query: query }}>
                    <NavLink className={styles.link}>{t('Portfolio')}</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href={{ pathname: '/pricing', query: query }}>
                    <NavLink className={styles.link}>{t('Pricing')}</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    {t('Learn')}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link href={{ pathname: '/learn', query: query }}>
                        <span className={styles.sublink}>{t('Learn')}</span>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div>
                <RightSection />
              </div>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
