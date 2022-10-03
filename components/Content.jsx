import React from 'react';
import Image from 'next/image';
import styles from '../styles/content.module.css';
import { theme } from '../utls/theme';

import { Col, Row, Container } from 'react-grid-system';
import CustomButton from './buttons/CustomButton';
import { useTranslation } from 'next-export-i18n';
import NumberCounter from './numberCounter/NumberCounter';
const Content = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row align='center' justify='center'>
        <Col lg={6} md={8} sm={12}>
          <section className={styles.infoSection}>
            <div>
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
              <div className={styles.buttonsContainer}>
                <span className={styles.buttonContainer}>
                  <CustomButton
                    rounding={5}
                    variant='filled'
                    color={theme.colors.primary}
                  >
                    {t('GetStarted')}
                  </CustomButton>
                </span>

                <span className={styles.buttonContainer}>
                  <CustomButton
                    rounding={5}
                    variant='outlined'
                    color={theme.colors.black}
                    style={{ marginLeft: '20px' }}
                  >
                    {t('HowItWorks')}
                  </CustomButton>
                </span>
              </div>

              <div className={styles.info}>
                <div className={styles.experience}>
                  <span className={styles.counter}>
                    <NumberCounter value={15} id='years' />+
                  </span>
                  <span className={styles.counterLabel}>
                    Years of
                    <br /> Experiece
                  </span>
                </div>
                <div className={styles.experience}>
                  <span className={styles.counter}>
                    <NumberCounter value={99} id='satsfied' />K{'  '}
                  </span>
                  <span className={styles.counterLabel}>
                    Satisfied &<br /> Happy Users
                  </span>
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col lg={6} md={4} sm={12}>
          <img src='/Invest1.svg' alt='invest' className={styles.img} />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
