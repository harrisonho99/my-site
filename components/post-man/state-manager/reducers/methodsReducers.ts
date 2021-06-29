import { SelectValue } from '../../components/InputBase/Select';
import { EnhanceAction } from '../schema/type';

const options: SelectValue[] = [
  { label: 'GET', value: 'get' },
  { label: 'POST', value: 'post' },
  { label: 'PUT', value: 'pust' },
  { label: 'PATCH', value: 'patch' },
  { label: 'DELETE', value: 'delete' },
  { label: 'HEAD', value: 'head' },
  { label: 'OPTIONS', value: 'options' },
];

export default function methodsReducers(
  state = { options },
  action: EnhanceAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
