import type { NextPage } from 'next'
import { Landingpage } from '../components/Home/landingpage';
import { Promotion } from '../components/Home/promotion';
import { Globally } from '../components/Home/globally';

const Home: NextPage = () => {
  return (
    <>
      <Landingpage/>
      <Promotion/>
      <Globally/>
    </>
  );
};

export default Home;
