import React from 'react';
import styles from '../styles/goals.module.css';
import Image from 'next/image';

import { GiOnTarget } from 'react-icons/gi';
import { Container, Row, Col } from 'react-grid-system';
const Goals = () => {
  return (
    <Container fluid>
      <Row align='center' justify='center'>
        <Col lg={6} md={8} sm={12}>
          <img src='/image Frame.png' alt='' className={styles.img} />
        </Col>
        <Col lg={6} md={4} sm={12}>
          <div className={styles.header}>
            Set your goals with our smart<span> suggestions</span>
            <p>
              Based on your goals, we will select a proposal for you to
              <br />
              deposit your money
            </p>
          </div>
          <div className={styles.targets}>
            <p>
              <span>
                <GiOnTarget />
              </span>
              Define your own goal
            </p>
            <p>
              <span>
                <GiOnTarget />
              </span>
              Get deposit suggestions
            </p>
            <p>
              <span>
                <GiOnTarget />
              </span>
              Track your progress
            </p>
          </div>
          <div className={styles.desc}>
            We make it simple. Tell us where you want to be in a few
            <br /> years and we'll tell you how much you have to save.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Goals;
