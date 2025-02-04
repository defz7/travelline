import type { NextPage } from 'next'
import Head from 'next/head'
import { Landingpage } from '../components/Home/landingpage';
import { Promotion } from '../components/Home/promotion';
import { Globally } from '../components/Home/globally';
import { Tour } from '../components/Home/tour';
import { Team } from '../components/Home/team';
import { ChooseUs } from '../components/Home/chooseUs';
import { Testimony } from '../components/Home/testimony';
import { Footer } from '../components/Layout/footer';
import { LatestNews } from '../components/Home/latestNews';
import { Navbar } from '../components/Layout/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Travelline</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-hidden">
        <Navbar />
        <Landingpage />
        <Promotion />
        <Globally />
        <Tour />
        <Team />
        <ChooseUs />
        <Testimony />
        <LatestNews />
        <Footer />
      </div>
    </>
  );
};

export default Home;
