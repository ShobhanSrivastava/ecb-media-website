import Head from 'next/head';

import Header from '../components/Header';
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
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
