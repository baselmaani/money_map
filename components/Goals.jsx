import React from 'react';
import styles from '../styles/goals.module.css';
import Image from 'next/image';

import { GiOnTarget } from 'react-icons/gi';
import { Container, Row, Col } from 'reactstrap';
import Section from './section/Section';
const Goals = () => {
  return (
    <Section>
      <Container>
        <Row className={styles.row}>
          <Col lg={6} md={8} sm={12}>
            <div className={styles.imageContainer}>
              <img src='/image Frame.png' alt='' className={styles.img} />
            </div>
          </Col>
          <Col lg={6} md={4} sm={12}>
            <div className={styles.info}>
              <div className={styles.header}>
                Set your goals with our smart<span> suggestions</span>
                <p>
                  Based on your goals, we will select a proposal for you to
                  <br />
                  deposit your money
                </p>
              </div>

              <div className={styles.targetsContainer}>
                <div className={styles.targets}>
                  <p>
                    <span>
                      <img src='/targetIcon.svg' />
                    </span>
                    Define your own goal
                  </p>
                  <p>
                    <span>
                      <img src='/targetIcon.svg' />
                    </span>
                    Get deposit suggestions
                  </p>
                  <p>
                    <span>
                      <img src='/targetIcon.svg' />
                    </span>
                    Track your progress
                  </p>
                </div>
              </div>
              <div className={styles.desc}>
                We make it simple. Tell us where you want to be in a few
                <br /> years and we'll tell you how much you have to save.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Goals;
