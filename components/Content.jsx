import React from 'react';
import Image from 'next/image';
import styles from '../styles/content.module.css';

import { Col, Row, Container } from 'react-grid-system';
const Content = () => {
  return (
    <Container fluid>
      <Row align='center' justify='center'>
        <Col lg={6} md={8} sm={12} style={{ paddingLeft: '40px' }}>
          <div className={styles.fHeader}>
            <p>Smart investment starts here</p>
          </div>
          <div className={styles.lHeader}>
            <p>invest to achieve your goals</p>
          </div>
          <p className={styles.desc}>
            Money Map is the first financial advisor for your
            <br /> investment decisions as it works for you to achieve your
            <br /> investment goals in investing in the various financial
            <br />
            markets
          </p>
          <div>
            <button className={styles.fButton}>Get Started</button>
            <button className={styles.lButton}>How We Work</button>
          </div>

          <div className={styles.info}>
            <div className={styles.experience}>
              <p> 15+</p> Years of
              <br /> Experiece
            </div>
            <div className={styles.clients}>
              <p> 99K</p> Satisfied &<br /> Happy Users
            </div>
          </div>
        </Col>
        <Col lg={6} md={4} sm={12}>
          <img src='/invest1.png' alt='invest' className={styles.img} />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
