import { PureComponent } from 'react';
import ResponseViewer from '../common/ResponseViewer';
import { Container, Paper } from '@material-ui/core';
class ResponseContainer extends PureComponent {
  render = () => {
    return (
      <Container className='mt-20 mb-10' maxWidth='md'>
        <Paper elevation={4} className='rounded-md overflow-hidden'>
          <ResponseViewer />
        </Paper>
      </Container>
    );
  };
}

export default ResponseContainer;
