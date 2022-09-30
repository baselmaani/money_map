import React from 'react';
import Description from '../../components/Description';
import { Col, Container, Row } from 'react-grid-system';
import styles from '../../styles/portfolio/portfolio.module.css';
import { AiFillCaretDown, AiOutlineGold, AiOutlineCheck } from 'react-icons/ai';
import { BsTelephone, BsInfoCircle } from 'react-icons/bs';
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdOutlineGTranslate,
} from 'react-icons/md';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BiDollar, BiCamera, BiBuildings, BiBitcoin } from 'react-icons/bi';

const index = () => {
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
            <h1>The simplest and safest way to invest</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nulla
              adipiscing amet, ipsum ultricies arcu, nunc.
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '150px' }}>
        <Row>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.increaseInvestment}>
              <h4>Increase your investment</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                nulla adipiscing amet, ipsum ultricies arcu, nunc.
              </p>
            </div>
          </Col>
          <Col md={12} lg={6} sm={12}>
            <img
              className={styles.investImg}
              src='/Increase your investment photo.png'
              alt=''
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '150px' }}>
        <Row align='cetner'>
          <Col md={4} lg={2} sm={12}>
            <div className={styles.frameItem}>
              <div className={styles.frameIcon}>
                <TbBrandGoogleAnalytics />
              </div>
              <p>Global Stocks</p>
            </div>
          </Col>
          <Col md={4} lg={2} sm={12}>
            {' '}
            <div className={styles.frameItem}>
              <div className={styles.frameIcon}>
                <BiDollar />
              </div>
              <p>Emerging Market Stocks</p>
            </div>
          </Col>
          <Col md={4} lg={2} sm={12}>
            {' '}
            <div className={styles.frameItem}>
              <div className={styles.frameIcon}>
                <BiCamera />
              </div>
              <p>Sukuk</p>
            </div>
          </Col>
          <Col md={4} lg={2} sm={12}>
            {' '}
            <div className={styles.frameItem}>
              <div className={styles.frameIcon}>
                <BiBuildings />
              </div>
              <p>Real Estate</p>
            </div>
          </Col>
          <Col md={4} lg={2} sm={12}>
            {' '}
            <div className={styles.frameItem}>
              <div className={styles.frameIcon}>
                <AiOutlineGold />
              </div>
              <p>Gold</p>
            </div>
          </Col>
          <Col md={4} lg={2} sm={12}>
            {' '}
            <div className={styles.frameItem}>
              <div className={styles.frameIcon}>
                <BiBitcoin />
              </div>
              <p>Cryptocurrency</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '150px' }}>
        <Row>
          <Col md={12} lg={2} sm={12}>
            <p className={styles.overView}>Overview</p>
          </Col>
          <Col md={12} lg={8} sm={12}>
            <div className={styles.globalStock}>
              <h4>Global Stocks</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                non in eu lobortis eu et posuere nulla volutpat.
              </p>
              <h4>Reasons we choose this Asset Class:</h4>
              <div className={styles.reasons}>
                {' '}
                <AiOutlineCheck />
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  non in eu lobortis eu et posuere nulla volutpat.
                </p>{' '}
              </div>
              <div className={styles.reasons}>
                {' '}
                <AiOutlineCheck />{' '}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  non in eu lobortis eu et posuere nulla volutpat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '150px' }}>
        <Row className={styles.ensureContainer}>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.ensure}>
              <h2>
                We have done this work to ensure the best results for your
                investment
              </h2>
              <h6>Diversified</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lobortis aliquam nisl enim gravida. Malesuada urna aliquet
                fermentum augue ut donec at arcu. Tempus mauris euismod pretium,
                vitae sollicitudin neque. At dignissim risus et, ut sed blandit.
              </p>
              <h6>Low cost</h6>
              <h6>Optimized</h6>
            </div>
          </Col>
          <Col md={12} lg={6} sm={12}>
            <img src='/piggybank-CBbxr3JgCoo-unsplash 1.png' alt='' />{' '}
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '150px', marginBottom: '150px' }}>
        <Row>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.contactUs}>
              <h6>Our Contact</h6>
              <h2>Have a question?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue efficitur lacus.
              </p>
              <div className={styles.address}>
                <div className={styles.contactIcon}>
                  <MdOutlineLocationOn />
                </div>
                918 Abner Road, Hudson
              </div>
              <div className={styles.email}>
                <div className={styles.contactIcon}>
                  <MdOutlineEmail />
                </div>
                example@webmail.com
              </div>
              <div className={styles.tel}>
                <div className={styles.contactIcon}>
                  <BsTelephone />
                </div>
                +1-234 567 890
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.inputs}>
              <div className={styles.flName}>
                {' '}
                <input className={styles.fName} placeholder='First Name' />
                <input className={styles.lName} placeholder='Last Name' />
              </div>

              <input className={styles.email} placeholder='Email' />
              <textarea
                className={styles.msg}
                placeholder='Message'
                rows='10'
                cols='40'
              ></textarea>
            </div>
          </Col>
        </Row>
        <div className={styles.answered}>
          <BsInfoCircle />
          Your message may be answered within two days to a week
        </div>
      </Container>
      <Description />
    </>
  );
};

export default index;
