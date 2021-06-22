import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/common/Layout';
import Nav from '../components/common/Head/Nav';
import { ThemeProvider } from '@material-ui/core';
import { useMUIConfigureTheme } from '../utils/useMUIConfigureTheme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const MUITheme = useMUIConfigureTheme();
  return (
    <>
      <ThemeProvider theme={MUITheme}>
        <Nav />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
