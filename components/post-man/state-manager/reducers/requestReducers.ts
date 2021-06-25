import { EnhanceAction } from '../schema/type';
export default function requestReducers(
  state: any = { loading: false },
  action: EnhanceAction
) {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
}
