import type { Variant, Severity, RenderAlertAction } from '../actions/creators';
import { OPEN_AlERT, CLOSE_ALERT } from '../actions/index';

type State = {
  alert: {
    show: boolean;
    severity: Severity;
    variant: Variant;
    message: string;
  };
};

export default function renderReducer(
  state: State = {
    alert: { show: false, severity: 'success', variant: 'outlined', message: '' },
  },
  action: RenderAlertAction
) {
  switch (action.type) {
    case OPEN_AlERT:
      const { variant, severity, message } = action;
      return { ...state, alert: { ...state.alert, show: true, variant, severity, message } };
    case CLOSE_ALERT:
      return { ...state, alert: { ...state.alert, show: false } };
    default:
      return state;
  }
}
export type { State as AlertState };
