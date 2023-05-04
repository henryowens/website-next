import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>Wenso</title>
      <meta name="description" content="Wenso public website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
);

export default App;
