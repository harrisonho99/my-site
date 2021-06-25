import { SelectValue } from '../../components/InputBase/Select';
import { EnhanceAction } from '../schema/type';

const options: SelectValue[] = [
  { label: 'GET', value: 'GET' },
  { label: 'POST', value: 'POST' },
  { label: 'PUT', value: 'PUT' },
  { label: 'PATCH', value: 'PATCH' },
  { label: 'DELETE', value: 'DELETE' },
  { label: 'HEAD', value: 'HEAD' },
  { label: 'OPTIONS', value: 'OPTIONS' },
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
