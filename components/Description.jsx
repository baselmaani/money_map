import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { TiLocationOutline } from 'react-icons/ti';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/description.module.css';
import Link from 'next/link';
import Section from './section/Section';
import { Container, Row } from 'reactstrap';
const description = () => {
  return (
    <Container>
      <Row>
        <Section item lg={6} xs={8} sm={12}>
          <h1 className={styles.header}>MONEY MAP SECURITIES LTD</h1>
        </Section>
        <Section item lg={12} xs={12} sm={12}>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            ultrices dui libero, dignissim ut a
          </div>
        </Section>
        <Section item lg={11} xs={12} sm={12}>
          <div className={styles.text}>
            Tristique varius eu aenean feugiat elementum nunc consectetur. Augue
            quisque egestas a ullamcorper sit sem lectus urna. Et nulla donec
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            ultrices dui libero, dignissim ut a Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Est ultrices dui libero, dignissim ut a
          </div>
        </Section>
        <Section item lg={11} xs={12} sm={12}>
          <div className={styles.text}>
            Tristique varius eu aenean feugiat elementum nunc consectetur. Augue
            quisque egestas a ullamcorper sit sem lectus urna. Et nulla donec
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            ultrices dui libero, dignissim ut a Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Est ultrices dui libero, dignissim ut a
          </div>
        </Section>
        <Section item lg={11} xs={12} sm={12}>
          <div className={styles.text}>
            Tristique varius eu aenean feugiat elementum nunc consectetur. Augue
            quisque egestas a ullamcorper sit sem lectus urna. Et nulla donec
            consequat sagittis et scelerisque. Dis ut eu vitae nisl praesent
            suspendisse sed elementum sed. Eu vestibulum ut in ullamcorper
            adipiscing. Est bibendum quam ultricies turpis. At feugiat purus
            posuere eu gravida blandit. Ut eget dolor eu ridiculus blandit in
          </div>
        </Section>
      </Row>
    </Container>
  );
};

export default description;
