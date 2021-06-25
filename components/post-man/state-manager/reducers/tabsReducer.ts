import { EnhanceAction } from '../schema/type';
import { State } from '../schema/type';
export default function tabsReducer(
  state: State | {} = {},
  action: EnhanceAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
