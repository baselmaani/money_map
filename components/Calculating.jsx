import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';

import styles from '../styles/calculating.module.css';
const Calculating = () => {
  return (
    <Container fluid>
      <Row align='center' justify='center' direction='row'>
        <Col lg={6} md={4} sm={12}>
          <div className={styles.calHeader}>
            Special <span> calculators</span> to achieve your goals
          </div>
          <p className={styles.desc}>
            Saving is so much easier Save your kids, new car or new home all
            with your financial advisor Money Map
          </p>
          <div className={styles.text}>
            Invest for the <span>future</span> and your
            <span>financial freedom</span>
          </div>

          <button className={styles.btn}>Try us out!</button>
        </Col>
        <Col lg={6} md={8} sm={12}>
          <img src='/Car Frame.png' alt='' className={styles.imgs} />
          <img src='/Airplan Frame.png' alt='' className={styles.imgs} />
          <img src="/Get a master's Frame.png" alt='' className={styles.imgs} />
        </Col>
      </Row>
    </Container>
  );
};

export default Calculating;
