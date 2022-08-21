import React from 'react';
import styles from '../styles/suponsers.module.css';
import Image from 'next/image';

import { Col, Container, Row } from 'react-grid-system';
const Suponsers = () => {
  return (
    <Container fluid>
      <Row direction='row'>
        <Col lg={3} md={4} sm={12}>
          <img
            src='/image 1.png'
            alt=''
            style={{ paddingTop: 50, width: '100%' }}
          />
        </Col>
        <Col lg={3} md={4} sm={12}>
          <img
            src='/image 2.png'
            alt=''
            style={{ paddingTop: 50, width: '100%' }}
          />
        </Col>
        <Col lg={3} md={4} sm={12}>
          <img
            src='/image 3.png'
            alt=''
            style={{ paddingTop: 50, width: '100%' }}
          />
        </Col>
        <Col lg={3} md={4} sm={12}>
          <img
            src='/image 4.png'
            alt=''
            style={{ paddingTop: 50, width: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Suponsers;
