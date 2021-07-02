import Loader from './Loader';
import { useSelector } from 'react-redux';
import FormWrapper from './FormWrapper';
import ResponseContainer from './ResponseContainer';

export default function PostmanContainer() {
  const isShowloader: boolean = useSelector(
    (state: any) => state.request.show_loader
  );
  return (
    <main>
      {isShowloader ? <Loader cancelButton/> : null}
      <FormWrapper />
      <ResponseContainer />
    </main>
  );
}
