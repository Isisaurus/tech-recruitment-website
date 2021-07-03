import { createClient } from 'contentful';
import '../styles/globals.css';
import Layout from '../components/Layout';

export async function getStaticProps() {
  // make connection to contentful space
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
