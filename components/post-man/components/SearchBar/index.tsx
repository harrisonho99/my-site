import { PureComponent } from 'react';
import MethodSelector from '../common/MethodSelector';
import TextField from '../InputBase/TextField';
import HighlightBtn from '../ButtonBase/HighlightBtn';
import { useMediaQuery } from '@material-ui/core';
class SearchBar extends PureComponent {
  render = () => {
    const { matches } = this.props as any;
    return (
      <div className='mt-20 pl-4 pr-4 flex flex-wrap'>
        <MethodSelector />
        <div className='flex-1 flex pl-2' style={{ minWidth: 200 }}>
          <TextField />
        </div>
        <div
          className={`flex justify-center items-center h-full ${
            matches ? 'mt-3 w-full' : 'ml-2'
          } `}
        >
          <HighlightBtn title='SEND' />
        </div>
      </div>
    );
  };
}

export default function Wrapper(props: any) {
  const matches = useMediaQuery('(max-width:500px)');
  return <SearchBar {...props} matches={matches} />;
}
