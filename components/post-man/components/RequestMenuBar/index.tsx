import { PureComponent } from 'react';
import { Container } from '@material-ui/core';
import RequestMenu from '../common/RequestMenu';
import RequestBoard from '../common/RequestBoard';
export default class RequestMenuBar extends PureComponent {
  render = () => {
    return (
      <>
        <Container maxWidth='sm'>
          <RequestMenu />
        </Container>
        <RequestBoard />
      </>
    );
  };
}
