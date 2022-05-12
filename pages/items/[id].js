import Head from 'next/head';

import MainTitle from '../../components/MainTitle/MainTitle';

export const getStaticPaths = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

const Item = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <MainTitle text={post.title} />
      <p>{post.body}</p>
    </>
  );
};

export default Item;
