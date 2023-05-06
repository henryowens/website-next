import { Container, ChakraProvider, CSSReset, ColorModeScript, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/Layout";
import customTheme from "@/styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={customTheme}>
    <Container maxWidth="100%" id="App" padding="5">
      <Head>
        <title>Wenso</title>
        <meta name="description" content="Wenso public website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript  initialColorMode={customTheme.initialColorMode}  />

      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </Container>
  </ChakraProvider>
);

export default App;
