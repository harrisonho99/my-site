import { PureComponent } from 'react';
import { Container } from '@material-ui/core';
import Table from '../Table';

export default class RequestBoard extends PureComponent {
  render = () => {
    return (
      <Container className='mt-6'>
        <Table />
      </Container>
    );
  };
}
