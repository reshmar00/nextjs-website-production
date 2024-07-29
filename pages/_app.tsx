import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset, extendTheme, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '500',
  subsets: ['latin'],
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFDB58",
      200: "#FFBF00",
      300: "#F4C430",
      900: "#FFAA1D",
    },
  },
});

function ReshmaPortfolio({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        bgImage="url('/resources/desktop.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgAttachment="fixed"
        minH="100vh"
        display="flex"
        flexDirection="column"
        boxSizing="border-box"
      >
        <Header />
          <Layout>
            <main className={raleway.className}>
              <Component {...pageProps} />
            </main>
          </Layout>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default ReshmaPortfolio;