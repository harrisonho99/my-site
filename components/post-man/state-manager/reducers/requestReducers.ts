import { EnhanceAction } from '../schema/type';
import { SHOW_LOADER, HIDE_LOADER } from '../actions/';

export default function requestReducers(
  state: any = { show_loader: false },
  action: EnhanceAction
) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, show_loader: true };
    case HIDE_LOADER:
      return { ...state, show_loader: false };
    default:
      return state;
  }
}
