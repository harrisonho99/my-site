import { EnhanceAction } from '../../schema/type';
import {
  CHANGE_TAB,
  SHOW_LOADER,
  HIDE_LOADER,
  SET_RESPONSE_VIEW,
  OPEN_AlERT,
  CLOSE_ALERT,
} from '../index';

type Variant = 'filled' | 'outlined';
type Severity = 'error' | 'warning' | 'info' | 'success';
interface RenderAlertProps {
  severity: Severity;
  message: string;
  variant?: Variant;
}
type RenderAlertAction = RenderAlertProps & EnhanceAction;

const changeTab = (index: number): EnhanceAction => ({
  type: CHANGE_TAB,
  payload: index,
});
const showLoader = (): EnhanceAction => ({
  type: SHOW_LOADER,
});
const hideLoader = (): EnhanceAction => ({
  type: HIDE_LOADER,
});
const setResponseView = (data: any): EnhanceAction => ({
  type: SET_RESPONSE_VIEW,
  payload: data,
});

const openAlert = ({ severity, message, variant }: RenderAlertProps): RenderAlertAction => ({
  severity,
  variant,
  type: OPEN_AlERT,
  message,
});
const closeAlert = (): EnhanceAction => ({ type: CLOSE_ALERT });

export type { RenderAlertProps, RenderAlertAction, Variant, Severity };

export { changeTab, showLoader, hideLoader, setResponseView, openAlert, closeAlert };
