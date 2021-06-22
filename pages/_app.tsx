import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/common/Layout'
import Nav from '../components/common/Head/Nav'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>)
}
export default MyApp
