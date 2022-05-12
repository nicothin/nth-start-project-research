import Head from 'next/head';

import MainTitle from '../components/MainTitle/MainTitle';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
      </Head>
      <MainTitle className="home" text="Home" />
    </div>
  );
};

export default Home;
