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

      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/icon/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/icon/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/icon/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/icon/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/icon/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/icon/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/icon/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/icon/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icon/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/icon/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/icon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/icon/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/icon/favicon-16x16.png'
      />
      <meta name='msapplication-TileColor' content='#171060' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#171060' />
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />
      <meta
        name='keywords'
        content='developer, lap trinh vien , harrison, hoang'
      />
      <meta name='theme-color' content='#171060' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-title' content='Harrison Ho' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='msapplication-navbutton-color' content='#171060' />
      <meta name='msapplication-TileColor' content='#171060' />
      <meta name='msapplication-TileImage' content='ms-icon-144x144.png' />
      <meta name='msapplication-config' content='/icon/browserconfig.xml' />
      <meta name='application-name' content='Harrison Ho - Developer' />
      <meta name='msapplication-tooltip' content='Tooltip Text' />
      <meta name='msapplication-starturl' content='/' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='full-screen' content='yes' />
      <meta name='browsermode' content='application' />
      <meta name='nightmode' content='enable/disable' />
      <meta name='layoutmode' content='fitscreen/standard' />
      <meta name='imagemode' content='force' />
      <meta name='screen-orientation' content='portrait' />
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileColor' content='#171060' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#171060' />
      <meta name='twitter:card' content='Developer Harrion Ho' />
      <meta name='twitter:url' content='Developer Harrion Ho' />
      <meta name='twitter:title' content='Developer Harrion Ho' />
      <meta name='twitter:description' content='Developer Harrion Ho' />
      <meta name='twitter:image' content='/icon/android-chrome-192x192.png' />
      <meta name='twitter:creator' content='@Hotsnow199' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Developer Harrion Ho' />
      <meta property='og:description' content='Developer Harrion Ho' />
      <meta property='og:site_name' content='Developer Harrion Ho' />
      <meta property='og:url' content='Developer Harrion Ho' />
      <meta property='og:image' content='/icon/apple-touch-icon.png' />
    </Head>
  );
}
