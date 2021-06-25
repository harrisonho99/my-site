import type { SelectValue } from '../../components/InputBase/Select';
import { Action } from 'redux';
interface State {
  methodsOptions: SelectValue[];
  tabs?: any;
}
interface EnhanceAction extends Action {
  payload?: any;
}
export type { State, EnhanceAction };
