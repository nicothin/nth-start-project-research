import Head from 'next/head';

import MainTitle from '../components/MainTitle/MainTitle';

const Error404 = () => {
  return (
    <div className="">
      <Head>
        <title>Ошибка 404</title>
      </Head>
      <MainTitle text="Error 404" />
    </div>
  );
};

export default Error404;
