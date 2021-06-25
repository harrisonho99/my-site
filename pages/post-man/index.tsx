import Balloons from '../../components/common/Balloons';
import PostmanContainer from '../../components/post-man/components/';
import { makeStore } from '../../components/post-man/state-manager/index';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

export default function Postman() {
  const store = makeStore();
  //debug
  useEffect(() => {
    (window as any).store = store;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Provider store={store}>
      <Balloons />
      <PostmanContainer />
    </Provider>
  );
}
