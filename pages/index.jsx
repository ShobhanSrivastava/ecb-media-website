import Head from 'next/head';
import Pixel from '../components/Pixel'

export default () => 
  <div>
    <Pixel name='FACEBOOK_PIXEL_1' />
  </div>

import Section1 from '../components/Sections/Section1';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import Section4 from '../components/Sections/Section4';
import Section5 from '../components/Sections/Section5';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={`pageWrapper`}>
      <Head>
        <title>ECB Media</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link> */}
      </Head>
      <Section1 />
      {/* <hr /> */}
      <Section2 />
      {/* <hr /> */}
      <Section3 />
      {/* <hr /> */}
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}