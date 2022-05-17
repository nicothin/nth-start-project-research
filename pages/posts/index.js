import Link from 'next/link';
import Head from 'next/head';

import MainTitle from '../../components/MainTitle/MainTitle';

export const getStaticProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await resp.json();
  if (!result) return { notFound: true };
  const data = result.slice(0, 10);
  return { props: { items: data }, };
};

const Items = ({ items }) => {
  return (
    <div className="posts">
      <Head>
        <title>Posts</title>
      </Head>
      <MainTitle text="Posts" />
      <ul>
        {items && items.map((item) => (
          <li key={item.id}><Link href={`/items/${item.id}`}>{item.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
