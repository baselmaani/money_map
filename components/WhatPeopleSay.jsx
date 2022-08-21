import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styles from '../styles/whatPeopleSay.module.css';
const WhatPeopleSay = () => {
  return (
    <Container fluid>
      <Row align='center' justify='center' direction='column'>
        <Col lg={5}>
          <div className={styles.header}>
            <div>What People Say About Us</div>
            <div className={styles.imgContainer}>
              <div className={styles.img}>
                <img src='/Vector3.png' alt='' />
              </div>
            </div>
          </div>
        </Col>
        <Row align='center' justify='center'>
          <Col lg={6} md={4} sm={12}>
            <div className={styles.subTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
            <div className={styles.viewMore}>
              <button className={styles.btn}>view more</button>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default WhatPeopleSay;
