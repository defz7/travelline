import type { NextPage } from 'next'
import { Landingpage } from '../components/Home/landingpage';
import { Promotion } from '../components/Home/promotion';

const Home: NextPage = () => {
  return (
    <>
      <Landingpage/>
      <Promotion/>
    </>
  );
};

export default Home;
