import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/common/Layout';
import Nav from '../components/common/Head/Nav';
import { ThemeProvider } from '@material-ui/core';
import { useMUIConfigureTheme } from '../utils/useMUIConfigureTheme';
import type { AppProps } from 'next/app';
import { ThemeState } from '../context/prefer-theme/PreferTheme';
import PreferThemeProvider from '../context/prefer-theme/PreferThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const MUITheme = useMUIConfigureTheme();
  return (
    <>
      <PreferThemeProvider value={ThemeState}>
        <ThemeProvider theme={MUITheme}>
          <Nav />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PreferThemeProvider>
    </>
  );
}
export default MyApp;
