import { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div id="App">
    <Head>
      <title>Wenso</title>
      <meta name="description" content="Wenso public website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);

export default App;
