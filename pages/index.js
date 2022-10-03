import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar';
import Content from '../components/Content';
import Suponsers from '../components/clients/Suponsers';
import Goals from '../components/Goals';
import HowITWork from '../components/HowITWork';
import Calculating from '../components/Calculating';
import WayChooseUS from '../components/WayChooseUS';
import WhatPeopleSay from '../components/WhatPeopleSay';
import Questions from '../components/Questions';
import Description from '../components/Description';
import Section from '../components/section/Section';
import Footer from '../components/footer/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Section>
        <Suponsers />
      </Section>
      <Section>
        <Goals />
      </Section>
      <Section>
        <HowITWork />
      </Section>
      <Section>
        <Calculating />
      </Section>
      <Section>
        <WayChooseUS />
      </Section>
      <Section>
        <WhatPeopleSay />
      </Section>
      <Section>
        <Questions />
      </Section>
      <Section>
        <Description />
      </Section>
      <Section>
        <Footer />
      </Section>
    </>
  );
}
