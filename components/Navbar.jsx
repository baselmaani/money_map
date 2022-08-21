import React from 'react';
import styles from '../styles/navbar.module.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Col, Row, Container } from 'react-grid-system';
const Navbar = () => {
  return (
    <Container fluid>
      <Row direction='row' align='center'>
        <Col lg={2}>
          <img
            src='\visual-identity-money-map-111.png'
            alt='dev logo'
            className={styles.img}
          />
        </Col>
        <Col lg={1}>
          <div className={styles.items}>
            About <ArrowDropDownIcon />
          </div>
        </Col>
        <Col lg={1}>
          <div className={styles.items}>Portfolio</div>
        </Col>
        <Col lg={1}>
          <div className={styles.items}>Pricing</div>
        </Col>
        <Col lg={1}>
          <div className={styles.items}>
            Learn
            <ArrowDropDownIcon />
          </div>
        </Col>
        <Col className={styles.items} lg={1} offset={{ md: 2 }}>
          <GTranslateIcon /> EN
          <ArrowDropDownIcon />
        </Col>
        <Col className={styles.items} lg={1}>
          <LocationOnOutlinedIcon />
          Global
          <ArrowDropDownIcon />
        </Col>
        <Col className={styles.items} lg={1}>
          Login
        </Col>
        <Col lg={1}>
          <button className={styles.btn}>Get Started</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
