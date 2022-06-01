import type { NextPage } from 'next'
import { Landingpage } from '../components/Home/landingpage';
import { Promotion } from '../components/Home/promotion';
import { Globally } from '../components/Home/globally';
import { Tour } from '../components/Home/tour-video';
import { Team } from '../components/Home/team';
import { ChooseUs } from '../components/Home/choose-us';

const Home: NextPage = () => {
  return (
    <>
      <Landingpage/>
      <Promotion/>
      <Globally/>
      <Tour/>
      <Team/>
      <ChooseUs/>
    </>
  );
};

export default Home;
