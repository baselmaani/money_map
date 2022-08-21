import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styles from '../styles/whyChooseUs.module.css';
import { AiTwotoneSetting, AiTwotoneLock } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';

const WayChooseUS = () => {
  return (
    <Container fluid>
      <Row align='center' justify='center'>
        <Col lg={6} md={4} sm={12}>
          <div className={styles.head}>
            Why choose us
            <h2>Dreams Come True When You Invest</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue efficitur lacus, et consequat justo convallis
              sit amet.
            </p>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <AiTwotoneSetting />
              </div>
              <div>
                <p>Real Time Checkup</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <AiTwotoneLock />
              </div>
              <div>
                <p>Real Time Checkup</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <BsClockHistory />
              </div>
              <div>
                <p>Real Time Checkup</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </div>
          </div>
        </Col>

        <Col lg={6} md={4} sm={12}>
          <div className={styles.fImg}>
            <img src='/img4.png' alt='img' />
          </div>
          <Row align='center' justify='between' direction='row'>
            <Col lg={6} md={4} sm={12}>
              <div className={styles.sImg}>
                <img src='/img3.png' alt='' />
              </div>
            </Col>
            <Col lg={6} md={4} sm={12}>
              <div className={styles.thImg}>
                <img src='/img1.png' alt='' />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default WayChooseUS;
