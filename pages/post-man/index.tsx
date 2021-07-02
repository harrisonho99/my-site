import Balloons from '../../components/common/Balloons';
import { makeStore } from '../../components/post-man/state-manager/index';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import Loader from '../../components/post-man/components/Loader';
import Head from 'next/head';
const Alert = dynamic(() => import('../../components/post-man/components/common/Alert'), {
  ssr: false,
});

const PostmanContainer = dynamic(
  () => import('../../components/post-man/components/'),
  // eslint-disable-next-line react/display-name
  { loading: () => <Loader />, ssr: false }
);

export default function Postman() {
  const store = makeStore();

  //debug
  useEffect(() => {
    (window as any).store = store;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Postman ✨</title>
      </Head>
      <Provider store={store}>
        <Alert />
        <Balloons />
        <PostmanContainer />
      </Provider>
    </>
  );
}
