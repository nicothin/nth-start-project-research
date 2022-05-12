import Layout from '../components/Layout/Layout';
import '../styles/styles.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp
