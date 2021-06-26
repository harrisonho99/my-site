import SearchBar from './SearchBar';
import Loader from '../../common/Loader';
import { useSelector } from 'react-redux';
import RequestMenuBar from './RequestMenuBar';
export default function PostmanContainer() {
  const isShowloader: boolean = useSelector(
    (state: any) => state.request.show_loader
  );
  return (
    <main>
      {isShowloader ? <Loader /> : null}
      <SearchBar />
      <div className='mt-6'>
        <RequestMenuBar />
      </div>
    </main>
  );
}
