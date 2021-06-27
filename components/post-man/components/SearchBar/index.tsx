import { PureComponent } from 'react';
import MethodSelector from '../common/MethodSelector';
import TextField from '../InputBase/TextField';
import HighlightBtn from '../ButtonBase/HighlightBtn';
import { Container, Paper } from '@material-ui/core';

export default class SearchBar extends PureComponent {
  render = () => {
    return (
      <Container className='mt-20' maxWidth='md'>
        <Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
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
