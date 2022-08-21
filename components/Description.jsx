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

const UseStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),

    backgroundColor: '#EBFFFA',
  },

  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const description = () => {
  const classes = UseStyles();
  return (
    <div>
      <Grid
        container
        spacing={6}
        direction='column'
        alignItems='cetner'
        justifyContent='center'
      >
        <Grid item lg={6} xs={8} sm={12}>
          <h1 className={styles.header}>MONEY MAP SECURITIES LTD</h1>
        </Grid>
        <Grid item lg={12} xs={12} sm={12}>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            ultrices dui libero, dignissim ut a
          </div>
        </Grid>
        <Grid item lg={11} xs={12} sm={12}>
          <div className={styles.text}>
            Tristique varius eu aenean feugiat elementum nunc consectetur. Augue
            quisque egestas a ullamcorper sit sem lectus urna. Et nulla donec
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            ultrices dui libero, dignissim ut a Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Est ultrices dui libero, dignissim ut a
          </div>
        </Grid>
        <Grid item lg={11} xs={12} sm={12}>
          <div className={styles.text}>
            Tristique varius eu aenean feugiat elementum nunc consectetur. Augue
            quisque egestas a ullamcorper sit sem lectus urna. Et nulla donec
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            ultrices dui libero, dignissim ut a Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Est ultrices dui libero, dignissim ut a
          </div>
        </Grid>
        <Grid item lg={11} xs={12} sm={12}>
          <div className={styles.text}>
            Tristique varius eu aenean feugiat elementum nunc consectetur. Augue
            quisque egestas a ullamcorper sit sem lectus urna. Et nulla donec
            consequat sagittis et scelerisque. Dis ut eu vitae nisl praesent
            suspendisse sed elementum sed. Eu vestibulum ut in ullamcorper
            adipiscing. Est bibendum quam ultricies turpis. At feugiat purus
            posuere eu gravida blandit. Ut eget dolor eu ridiculus blandit in
          </div>
        </Grid>
        <Divider className={styles.divider} />
      </Grid>

      <Grid
        container
        spacing={10}
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Grid item lg={2} xs={12} sm={6}>
          <div className={styles.homeList}>
            <h2>Home</h2>
            <Link href='#'>
              <a>Invest</a>
            </Link>
            <Link href='#'>
              <a>How it works</a>
            </Link>
            <Link href='#'>
              <a>Our portfolios</a>
            </Link>
            <Link href='#'>
              <a>Crypto portfolio</a>
            </Link>
          </div>
        </Grid>
        <Grid item lg={2} xs={12} sm={6}>
          <div className={styles.homeList}>
            <h2>About</h2>
            <Link href='#'>
              <a>Who we are</a>
            </Link>
            <Link href='#'>
              <a>Press</a>
            </Link>
            <Link href='#'>
              <a>Contact</a>
            </Link>
            <Link href='#'>
              <a>Careers</a>
            </Link>
          </div>
        </Grid>
        <Grid item lg={2} xs={12} sm={6}>
          <div className={styles.homeList}>
            <h2>Support</h2>
            <Link href='#'>
              <a>FAQs</a>
            </Link>
            <Link href='#'>
              <a>Help Center</a>
            </Link>
            <Link href='#'>
              <a>Consultation</a>
            </Link>
            <Link href='#'>
              <a>Visit Us</a>
            </Link>
          </div>
        </Grid>
        <Grid item lg={2} xs={12} sm={6}>
          <div className={styles.homeList}>
            <h2>Quick links</h2>
            <Link href='#'>
              <a>Data management</a>
            </Link>
            <Link href='#'>
              <a>Terms & Conditions</a>
            </Link>
            <Link href='#'>
              <a>Privacy policy</a>
            </Link>
            <Link href='#'>
              <a>(EN) United States</a>
            </Link>
          </div>
        </Grid>
        <Grid item lg={2} xs={12} sm={6}>
          <div className={styles.homeList}>
            <h2>Get In Touch</h2>

            <Link href='#'>
              <a className={styles.linkContainer}>
                <div className={styles.icons}>
                  <TiLocationOutline />
                </div>
                918 Abner Road, Hudson
              </a>
            </Link>
            <Link href='#'>
              <a className={styles.linkContainer}>
                <div className={styles.icons}>
                  <MdOutlineEmail />
                </div>
                example@webmail.com
              </a>
            </Link>
            <Link href='#'>
              <a className={styles.linkContainer}>
                <div className={styles.icons}>
                  <BsTelephone />
                </div>
                +1-234 567 890
              </a>
            </Link>
          </div>
        </Grid>
      </Grid>
      <Divider className={styles.divider} />
      <div style={{ padding: 40 }}>
        <Grid
          container
          spacing={10}
          direction='row'
          justifyContent='space-around'
          alignItems='center'
        >
          <Grid item lg={4} xs={12} sm={6}>
            <div className={styles.footer}> Powered By WAMBLEX</div>
          </Grid>
          <Grid item lg={4} xs={12} sm={6}>
            <div className={styles.footer}>
              © 2022 Money Map Inc. | All rights reserved.
            </div>
          </Grid>
          <Grid item lg={4} xs={12} sm={6}>
            <div className={styles.mediaIcons}>
              <div className={styles.mediaIcon}>
                <FaFacebookF />
              </div>
              <div className={styles.mediaIcon}>
                <FaInstagram />
              </div>
              <div className={styles.mediaIcon}>
                <FaTwitter />
              </div>
              <div className={styles.mediaIcon}>
                <FaLinkedinIn />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default description;
