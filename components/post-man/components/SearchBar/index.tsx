import { PureComponent } from 'react';
import MethodSelector from '../common/MethodSelector';
import TextField from '../InputBase/TextField';
import HighlightBtn from '../ButtonBase/HighlightBtn';
import { useMediaQuery, Container, Paper } from '@material-ui/core';

class SearchBar extends PureComponent {
  render = () => {
    const { matches } = this.props as any;
    return (
      <Container className='mt-20' maxWidth='md'>
        <Paper elevation={0}>
          <div className='flex flex-nowrap'>
            <MethodSelector />
            <div
              className='flex-1 flex pl-2 justify-center items-center'
              style={{ maxWidth: 700 }}
            >
              <TextField />
            </div>
            <div className={`flex justify-center items-center h-full ml-2`}>
              <HighlightBtn title='SEND' />
            </div>
          </div>
        </Paper>
      </Container>
    );
  };
}

export default function Wrapper(props: any) {
  const matches = useMediaQuery('(max-width:500px)');
  return <SearchBar {...props} matches={matches} />;
}
