import { EnhanceAction } from '../schema/type';
import { SET_RESPONSE_VIEW } from '../actions';

export default function responseReducer(
  state = { result: {} },
  action: EnhanceAction
) {
  switch (action.type) {
    case SET_RESPONSE_VIEW:
      return { ...state, result: action.payload };
    default:
      return state;
  }
}
