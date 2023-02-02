import Head from "next/head";
import '../styles/globals.css';
import SocialIcons from '../components/SocialIcons';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;900&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <SocialIcons />
      <Component {...pageProps} />
    </main>
  </div>
);

export default MyApp;