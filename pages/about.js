import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/about/about.module.css';
import { Col, Container, Row } from 'react-grid-system';
import { Grid } from '@material-ui/core';
import {
  BsCheckCircleFill,
  BsShield,
  BsBuilding,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { HiOutlineUserGroup, HiOutlineArrowRight } from 'react-icons/hi';
import { GrImpact } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import { TbLocation } from 'react-icons/tb';
import {
  AiOutlineUsergroupAdd,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiBuilding } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import Suponsers from '../components/Suponsers';
import GoogleMapReact from 'google-map-react';
import Questions from '../components/Questions';
import Description from '../components/Description';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const about = () => {
  return (
    <>
      {' '}
      <Container className={styles.header}>
        <Row>
          <Col>
            <div className={styles.ing}>
              <Navbar />
            </div>
            <h1>About Money Map</h1>
            <p>
              Money Map is backed by a team of world-class financial experts and
              the best technology talent.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ paddingLeft: '40px' }}>
        <Row
          align='center'
          justify='flex-start'
          direction='row'
          className={styles.list}
        >
          <Col md={6} lg={2} sm={12}>
            <p>Who we are</p>
          </Col>
          <Col md={6} lg={2} sm={12}>
            <p>Team</p>
          </Col>
          <Col md={6} lg={2} sm={12}>
            <p>Services</p>
          </Col>
          <Col md={6} lg={2} sm={12}>
            <p>Why choose us</p>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          marginTop: '100px',
          paddingLeft: '40px',
          marginBottom: '250px',
        }}
      >
        <Row>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.welcome}>
              <h6>Welcome to Money Map</h6>
              <h3>We Are Finance & investment Manager Since 1996</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <Row>
              <Col md={12} lg={6} sm={12}>
                <ul className={styles.welcomeList}>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} />{' '}
                    Professional team
                  </li>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} /> Have heen
                    certified
                  </li>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} /> Quality
                    of our research
                  </li>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} /> Breadth
                    of our capabilities
                  </li>
                </ul>
              </Col>
              <Col md={12} lg={6} sm={12}>
                <ul className={styles.welcomeList}>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} />{' '}
                    Trustworthy
                  </li>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} /> High
                    integrity
                  </li>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} /> Global
                    reach of our business
                  </li>
                  <li>
                    <BsCheckCircleFill style={{ color: '#3AA391' }} />
                    Providing The best service
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <img
              src='/Frame 3.png'
              style={{ width: '100%', height: 'auto' }}
              alt='Frame'
            />
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ marginTop: '100px', paddingLeft: '40px' }}>
        <Row style={{ background: '#F4FFFC' }}>
          <Col md={12} lg={4} sm={12}>
            <Card
              border='primary'
              className={styles.card}
              style={{
                backgroundColor: '#222E46',
                color: 'white',
              }}
            >
              <Card.Header className={styles.cardIcon}>
                <BsShield />
              </Card.Header>
              <Card.Header
                className={styles.cardHeader}
                style={{ color: 'white' }}
              >
                Certified Investment
              </Card.Header>
              <Card.Body>
                <Card.Text
                  className={styles.cardText}
                  style={{ color: 'white' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  lobortis fermentum volutpat amet tellus. elit. Urna, lobortis
                  fermentum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} lg={4} sm={12}>
            <Card className={styles.card}>
              <Card.Header
                className={styles.cardIcon}
                style={{ color: '#222E46' }}
              >
                <AiOutlineUsergroupAdd />
              </Card.Header>
              <Card.Header
                className={styles.cardHeader}
                style={{ color: '#222E46' }}
              >
                Trusted Clients
              </Card.Header>
              <Card.Body>
                <Card.Text className={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  lobortis fermentum volutpat amet tellus. elit. Urna, lobortis
                  fermentum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={4} sm={12}>
            <Card className={styles.card}>
              <Card.Header
                className={styles.cardIcon}
                style={{ color: '#222E46' }}
              >
                <HiOutlineUserGroup />
              </Card.Header>
              <Card.Header
                className={styles.cardHeader}
                style={{ color: '#222E46' }}
              >
                Professional Team
              </Card.Header>
              <Card.Body>
                <Card.Text className={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  lobortis fermentum volutpat amet tellus. elit. Urna, lobortis
                  fermentum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <div
            style={{
              backgroundColor: '#F4FFFC',
              width: '100%',
              height: 'auto',
            }}
          >
            <Suponsers />
          </div>
        </Row>
      </Container>
      <Container fluid style={{ marginTop: '100px', paddingLeft: '40px' }}>
        <div className={styles.ourExpert}>
          <h1>Our Expert</h1>
          <p>
            A strong team with a big dream. We’re called Money Map (which means
            ‘one’ in Arabic) for a reason. We have One mission. One ethos. One
            goal.
          </p>
        </div>
        <Row justify='between'>
          <Col md={12} lg={6} sm={12}>
            <img
              src='/pexels-fauxels-3184292 1.png'
              alt=''
              style={{ width: '100%' }}
            />
          </Col>
          <Col md={12} lg={6} sm={12}>
            <img
              src='/pexels-fauxels-3183186 1.png'
              alt=''
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        <h1 className={styles.TeamHeader}>
          Meet some of the Global Team at Money Map
        </h1>
        <Row justify='around' style={{ padding: '40px' }}>
          <Col md={12} lg={4} sm={12}>
            <div className={styles.teamContainer}>
              <img src='/team 1.png' alt='' className={styles.img} />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h1>James P. Morrison</h1>
                  <p>Chairman and CEO</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor, id nulla ut nisl, morbi pulvinar in. Mauris mauris
                    eu suscipit rutrum est.
                  </p>

                  <div className={styles.teamIconContainer}>
                    <Row>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsInstagram />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsLinkedin />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsTwitter />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            <div className={styles.teamContainer}>
              <img src='/team 2.png' alt='' className={styles.img} />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h1>James P. Morrison</h1>
                  <p>Chairman and CEO</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor, id nulla ut nisl, morbi pulvinar in. Mauris mauris
                    eu suscipit rutrum est.
                  </p>

                  <div className={styles.teamIconContainer}>
                    <Row>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsInstagram />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsLinkedin />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsTwitter />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            <div className={styles.teamContainer}>
              <img src='/team 3.png' alt='' className={styles.img} />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h1>James P. Morrison</h1>
                  <p>Chairman and CEO</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor, id nulla ut nisl, morbi pulvinar in. Mauris mauris
                    eu suscipit rutrum est.
                  </p>

                  <div className={styles.teamIconContainer}>
                    <Row>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsInstagram />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsLinkedin />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsTwitter />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>{' '}
        <Row justify='around' style={{ padding: '40px' }}>
          <Col md={12} lg={4} sm={12}>
            <div className={styles.teamContainer}>
              <img src='/team 4.png' alt='' className={styles.img} />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h1>James P. Morrison</h1>
                  <p>Chairman and CEO</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor, id nulla ut nisl, morbi pulvinar in. Mauris mauris
                    eu suscipit rutrum est.
                  </p>

                  <div className={styles.teamIconContainer}>
                    <Row>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsInstagram />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsLinkedin />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsTwitter />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            <div className={styles.teamContainer}>
              <img src='/team 5.png' alt='' className={styles.img} />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h1>James P. Morrison</h1>
                  <p>Chairman and CEO</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor, id nulla ut nisl, morbi pulvinar in. Mauris mauris
                    eu suscipit rutrum est.
                  </p>

                  <div className={styles.teamIconContainer}>
                    <Row>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsInstagram />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsLinkedin />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsTwitter />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            <div className={styles.teamContainer}>
              <img src='/team 6.png' alt='' className={styles.img} />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h1>James P. Morrison</h1>
                  <p>Chairman and CEO</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor, id nulla ut nisl, morbi pulvinar in. Mauris mauris
                    eu suscipit rutrum est.
                  </p>

                  <div className={styles.teamIconContainer}>
                    <Row>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsInstagram />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsLinkedin />
                        </div>
                      </Col>
                      <Col md={12} lg={4} sm={12}>
                        <div className={styles.teamIcon}>
                          <BsTwitter />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col justify='center' align='center' md={12} lg={12} sm={12}>
            <div className={styles.services}>
              <h4>Our Services</h4>
              <h1>Money Map Financial Services</h1>
              <img src='/Vector 2.png' alt='' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </Col>
        </Row>
        <Row justify='around' style={{ padding: '40px' }}>
          <Col md={12} lg={4} sm={12}>
            {' '}
            <div className={styles.serviceCards}>
              <div className={styles.serviceIcons}>
                <AiOutlineHome />
              </div>
              <h2>Retirement Plans</h2>

              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
              <button>
                read more <HiOutlineArrowRight />
              </button>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            {' '}
            <div className={styles.serviceCards}>
              <div className={styles.serviceIcons}>
                <BiBuilding />
              </div>
              <h2>Risk Management</h2>

              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
              <button>
                read more <HiOutlineArrowRight />
              </button>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            {' '}
            <div className={styles.serviceCards}>
              <div className={styles.serviceIcons}>
                <BsBuilding />
              </div>
              <h2>Estate Planning</h2>

              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
              <button>
                read more <HiOutlineArrowRight />
              </button>
            </div>
          </Col>
        </Row>
        <Row justify='around' style={{ padding: '40px' }}>
          <Col md={12} lg={4} sm={12}>
            {' '}
            <div className={styles.serviceCards}>
              <div className={styles.serviceIcons}>
                <AiOutlineUser />
              </div>
              <h2>Personal Portfolio</h2>

              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
              <button>
                read more <HiOutlineArrowRight />
              </button>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            {' '}
            <div className={styles.serviceCards}>
              <div className={styles.serviceIcons}>
                <GrImpact />
              </div>
              <h2>Impact Investing</h2>

              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
              <button>
                read more <HiOutlineArrowRight />
              </button>
            </div>
          </Col>
          <Col md={12} lg={4} sm={12}>
            {' '}
            <div className={styles.serviceCards}>
              <div className={styles.serviceIcons}>
                <TbLocation />
              </div>
              <h2>Mergers & Acquisitions</h2>

              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
              <button>
                read more <HiOutlineArrowRight />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.whyChooseUs}>
        <img src='/in. 1.png' alt='' className={styles.bgImg} />
        <div className={styles.imgContent}>
          <Row>
            <Col md={12} lg={12} sm={12}>
              <div className={styles.content}>
                <h4>Why Choose Us</h4>
                <h1>
                  Money Map is trusted by 2+ million users in 100+ countries.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </Col>
          </Row>
          <Row justify='around'>
            <Col md={6} lg={3} sm={12}>
              <div className={styles.loyalCLient}>
                <p> 480+</p>loyal clients
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <div className={styles.loyalCLient}>
                <p> 480+</p>loyal clients
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <div className={styles.loyalCLient}>
                <p> 480+</p>loyal clients
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <div className={styles.loyalCLient}>
                <p> 480+</p>loyal clients
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className={styles.mapHeader}>
              <h4>We Promise, We aren’t a Robot</h4>
              <h1>Where you can find us</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.map}>
              <div style={{ height: '100vh', width: '100%' }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d741.7580700470094!2d12.28500846293188!3d58.27514757605488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46453c5af4a7a17d%3A0xd97e9128e80bb140!2sKlintv%C3%A4gen%2025%2C%20461%2050%20Trollh%C3%A4ttan!5e0!3m2!1ssv!2sse!4v1664218465654!5m2!1ssv!2sse'
                  width='100%'
                  height='100%'
                  style={{ border: '20px' }}
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
              <div className={styles.address}>
                <p>TECH TEAM</p>
                <h2>Sweden</h2>
                <p>Klintvägen 25</p>
                <p>Trollhättan</p>
                <p>08-540 855 93</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Questions />
      <Description />
    </>
  );
};

export default about;
