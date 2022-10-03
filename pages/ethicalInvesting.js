import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/ethicalInvesting/ethicalInvesting.module.css';
import { AiFillCaretDown, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineGTranslate, MdOutlineLocationOn } from 'react-icons/md';
import { RiNodeTree } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';
import Questions from '../components/Questions';
import Description from '../components/Description';

const ethicalInvesting = () => {
  return (
    <>
      <Container fluid className={styles.header}>
        <Row align='center' justify='between'>
          <Col md={12} lg={2} sm={12}>
            <div className={styles.barImg}>
              <img src='\visual-identity-money-map-111-PhotoRoom.png' alt='' />
            </div>
          </Col>
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>
              About <AiFillCaretDown />
            </div>
          </Col>{' '}
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>Portfolio</div>
          </Col>{' '}
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>Pricing</div>
          </Col>{' '}
          <Col md={12} lg={3} sm={12}>
            <div className={styles.barItem}>
              Learn <AiFillCaretDown />
            </div>
          </Col>{' '}
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>
              <MdOutlineGTranslate /> EN <AiFillCaretDown />
            </div>
          </Col>{' '}
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>
              <MdOutlineLocationOn /> Global <AiFillCaretDown />
            </div>
          </Col>{' '}
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>Login</div>
          </Col>{' '}
          <Col md={12} lg={1} sm={12}>
            <div className={styles.barItem}>
              <button className={styles.btn}>Get Started</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6} sm={12}>
            <h1>We share our pure values</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nulla
              adipiscing amet, ipsum ultricies arcu, nunc.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.halalInvestment}>
        <Row>
          <Col align='center' md={12} lg={12} sm={12}>
            <h2>What is halal investment?</h2>

            <p style={{ width: '70%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </Col>
        </Row>
        <Row>
          <Col align='center' justify='around' md={6} lg={3} sm={12}>
            <img src='/Debt Group.png' alt='' />
            <p> EXCESS DEBT</p>
          </Col>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Smoke Group.png' alt='' />
            <p> TOBACCO</p>
          </Col>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Wine Group.png' alt='' />
            <p> ALCOHOL</p>
          </Col>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Gun Group.png' alt='' />
            <p> FIREARMS</p>
          </Col>
        </Row>
        <Row>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Gambling Group.png' alt='' />
            <p> GAMBLING</p>
          </Col>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Haram view Group.png' alt='' />
            <p> ADULT ENTERTAINMENT</p>
          </Col>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Food Group.png' alt='' />
            <p> IMPURE FOODSTOCK</p>
          </Col>
          <Col align='center' md={6} lg={3} sm={12}>
            <img src='/Building Group.png' alt='' />
            <p> USURIOUS INSTITUTIONS</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.screening}>
              <div className={styles.screeningIcons}>
                <RiNodeTree />
                <HiOutlineUserGroup />
              </div>
              <div className={styles.screeningDesc}>
                {' '}
                <h2>Financial Screening</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque nibh posuere semper egestas libero. Nisi,
                  molestie ultricies sit at varius vel velit, vitae nullam.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} sm={12}>
            {' '}
            <div className={styles.screening}>
              <div className={styles.screeningIcons}>
                <AiOutlineSetting />
                <HiOutlineUserGroup />
              </div>
              <div className={styles.screeningDesc}>
                {' '}
                <h2>Operational Screening</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque nibh posuere semper egestas libero. Nisi,
                  molestie ultricies sit at varius vel velit, vitae nullam.{' '}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginBottom: '50px' }}>
        <Row className={styles.commitment}>
          <Col justify='between' md={12} lg={6} sm={12}>
            <h2>Our commitment to Shariaah compliance</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              dictumst tristique a non, purus.
            </p>
            <button>VIEW CERTIFICATE</button>
          </Col>
          <Col justify='between' md={12} lg={6} sm={12}>
            <div className={styles.commitmentImg}>
              <img src='/thumbnail-shariyah-review-bureau.png' alt='' />
              <img src='/aaoifi.png' alt='' />
            </div>
          </Col>
        </Row>
      </Container>
      <Questions />
      <Description />
    </>
  );
};

export default ethicalInvesting;
