import { EnhanceAction } from '../schema/type';
import { SET_LOADER } from '../actions/';
export default function requestReducers(
  state: any = { show_loader: false },
  action: EnhanceAction
) {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, show_loader: action.payload };
    default:
      return state;
  }
}
