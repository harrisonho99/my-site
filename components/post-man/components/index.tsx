import SearchBar from './SearchBar';
import Loader from '../../common/Loader';
import { useSelector } from 'react-redux';
export default function PostmanContainer() {
  const isShowloader: boolean = useSelector(
    (state: any) => state.request.show_loader
  );
  return (
    <main>
      {isShowloader ? <Loader /> : null}
      <SearchBar />
    </main>
  );
}
