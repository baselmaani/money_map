import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styles from '../styles/questions.module.css';
const Questions = () => {
  return (
    <Container justify={'center'}>
      <Row>
        <Col lg={6} sm={12}>
          <div className={styles.question}>
            <h1>Frequently Asked Questions</h1>
            <p>What is Money Map?</p>
            <p>How much do I need to invest?</p>
            <p>What are the costs to invest?</p>
            <p>What investments does Money Map offer?</p>
            <p>Can I move my money out if I want to?</p>
            <button className={styles.btn}>View All FAQs</button>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className={styles.imgContainer}>
            <img src='/Ask.png' alt='' className={styles.img} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Questions;
