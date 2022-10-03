import React from 'react';
import {
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import styles from './Navbar.module.css';
import Link from 'next/link';
import LanguageDropdown from './LanguageDropDown';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import { CgPin } from 'react-icons/cg';
import CustomButton from '../buttons/CustomButton';
import { theme } from '../../utls/theme';

function RightSection() {
  const [query] = useLanguageQuery();
  const { t } = useTranslation();
  return (
    <>
      <LanguageDropdown />
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          <span>
            <CgPin size={22} />
            <span style={{ margin: '0 5px' }}>{t('Global')}</span>
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link href={{ pathname: '/global', query: query }}>
              <span className={styles.sublink}>{t('Global')}</span>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <Link href={{ pathname: '/login', query: query }}>
          <NavLink className={styles.link}>{t('Login')}</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <CustomButton variant='filled' color={theme.colors.primary} rounded={0}>
          {t('GetStarted')}
        </CustomButton>
      </NavItem>
    </>
  );
}

export default RightSection;
