import dynamic from 'next/dynamic';
import Loader from '../../components/post-man/components/Loader';
import { useEffect } from 'react';
const ReplContainer = dynamic(() => import('../../components/repl/Container'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <Loader />,
});
export default function Repl() {
  useEffect(() => {
    document.title = 'Javascript Playground 🎨';
    return () => {
      document.title = '✋ There! ';
    };
  }, []);
  return (
    <main>
      <ReplContainer />
    </main>
  );
}
