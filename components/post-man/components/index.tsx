import { Provider } from 'react-redux';
import store from '../state-manager';
import SearchBar from './SearchBar';
export default function PostmanContainer() {
  return (
    <Provider store={store}>
      <main>
        <SearchBar />
      </main>
    </Provider>
  );
}
