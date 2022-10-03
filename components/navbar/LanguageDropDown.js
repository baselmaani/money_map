import React, { useState } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { SiGoogletranslate } from 'react-icons/si';
import {
  LanguageSwitcher,
  useLanguageQuery,
  useTranslation,
} from 'next-export-i18n';

function LanguageDropdown() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const lang = query?.lang;
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
        <span>
          <SiGoogletranslate size={22} />
          <span style={{ marginLeft: 5, marginRight: 5 }}>{lang}</span>
        </span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <LanguageSwitcher lang={'en'}>
            <span className={styles.sublink}>{t('En')}</span>
          </LanguageSwitcher>
        </DropdownItem>

        <DropdownItem>
          <LanguageSwitcher lang={'sv'}>
            <span className={styles.sublink}>{t('Sv')}</span>
          </LanguageSwitcher>
        </DropdownItem>

        <DropdownItem>
          <LanguageSwitcher lang={'ar'}>
            <span className={styles.sublink}>{t('Ar')}</span>
          </LanguageSwitcher>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default LanguageDropdown;
