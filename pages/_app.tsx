import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/common/Layout';
import Nav from '../components/common/Head/Nav';
import { ThemeProvider } from '@material-ui/core';
import { useMUIConfigureTheme } from '../hooks/useMUIConfigureTheme';
import type { AppProps } from 'next/app';
import { ThemeState } from '../context/prefer-theme/PreferTheme';
import PreferThemeProvider from '../context/prefer-theme/PreferThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (window as any).theme = ThemeState;
  }, []);
  const MUITheme = useMUIConfigureTheme('dark', ThemeState.subscribe);
  return (
    <>
      <PreferThemeProvider value={ThemeState}>
        <ThemeProvider theme={MUITheme}>
          <CssBaseline />
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
