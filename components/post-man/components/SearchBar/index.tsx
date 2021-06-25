import { PureComponent } from 'react';
import MethodSelector from '../common/MethodSelector';
export default class SearchBar extends PureComponent {
  render = () => {
    return (
      <div className='mt-20 pl-4 pr-4'>
        <MethodSelector />
      </div>
    );
  };
}
