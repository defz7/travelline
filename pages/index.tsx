import type { NextPage } from 'next'
import { Landingpage } from '../components/Home/landingpage';
import { Promotion } from '../components/Home/promotion';
import { Globally } from '../components/Home/globally';
import { Tour } from '../components/Home/tour-video';
import { Team } from '../components/Home/team';
import { ChooseUs } from '../components/Home/choose-us';
import { Testimony } from '../components/Home/testimony';
import { Footer } from '../components/Layout/footer';

const Home: NextPage = () => {
  return (
    <>
      <Landingpage/>
      <Promotion/>
      <Globally/>
      <Tour/>
      <Team/>
      <ChooseUs/>
      <Testimony/>
      <Footer/>
    </>
  );
};

export default Home;
