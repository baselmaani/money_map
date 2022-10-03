import React from 'react';
import { Col, Row, Container } from 'react-grid-system';
import Image from 'next/image';

import styles from '../styles/howToWork.module.css';
import Section from './section/Section';

const HowITWork = () => {
  return (
    <Section>
      <Container>
        <Row align='center' direction='column'>
          <Col lg={12} sm={12}>
            <div className={styles.header}>
              How It Works
              <p>How Money Map Work</p>
              <img src='/vector 2.png' alt='' className={styles.img} />
            </div>
          </Col>
          <Col lg={12} sm={12}>
            <div className={styles.img}></div>
          </Col>
          <Col lg={12} sm={12}>
            <div className={styles.text}>
              How can this be achieved using artificial intelligence and
              <br /> technology?
            </div>
          </Col>
        </Row>
        <Row justify='center'>
          <Col lg={3} md={4} sm={12}>
            <div className={styles.itemContainer}>
              <img src='/Group 8.png' alt='' className={styles.imgGroup} />
              <p className={styles.imgHeader}>Integration</p>
              <div className={styles.desc}>
                What does your financial life look like and what is your goal
                for investing? What is the right risk limit for you?
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className={styles.itemContainer}>
              <img src='/Group 9.png' alt='' className={styles.imgGroup} />
              <p className={styles.imgHeader}>Analysis</p>
              <div className={styles.desc}>
                Based on your answers, we will determine an investment plan that
                suits the level of risk and the time period that is convenient
                for you. It can be customized at any time.
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className={styles.itemContainer}>
              <img src='/Group 10.png' alt='' className={styles.imgGroup} />
              <p className={styles.imgHeader}>Start Invest</p>
              <div className={styles.desc}>
                Even while you sleep. Once your investment begins, we are
                constantly working to rebalance your portfolio
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default HowITWork;
