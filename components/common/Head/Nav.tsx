import Head from 'next/head';
export default function Nav() {
  return (
    <Head>
      <title>Hello I&apos;m Harrison</title>
      <meta name='description' content="Hello, I'm a developer" />
      <link rel='icon' href='/favicon.ico' />
      {process.env.NODE_ENV === 'development' ? null : (
        <script async src='/script/disable_devtool.js' />
      )}
    </Head>
  );
}
