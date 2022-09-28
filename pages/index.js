import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Suponsers from '../components/Suponsers';
import Goals from '../components/Goals';
import HowITWork from '../components/HowITWork';
import Calculating from '../components/Calculating';
import WayChooseUS from '../components/WayChooseUS';
import WhatPeopleSay from '../components/WhatPeopleSay';
import Questions from '../components/Questions';
import Description from '../components/Description';
export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Suponsers />
      <Goals />
      <HowITWork />
      <Calculating />
      <WayChooseUS />
      <WhatPeopleSay />
      <Questions />
      <Description />
    </>
  );
}
