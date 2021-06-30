import type { EnhanceAction } from '../schema/type';

export default function formReducer(state: any = {}, action: EnhanceAction) {
  switch (action.type) {
    case 'TEST':
      return { ...state };
    default:
      return state;
  }
}
