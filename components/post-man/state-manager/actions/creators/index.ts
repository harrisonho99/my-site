import { EnhanceAction } from '../../schema/type';
import { CHANGE_TAB, SET_LOADER, SET_RESPONSE_VIEW } from '../index';

const changeTab = (index: number): EnhanceAction => ({
  type: CHANGE_TAB,
  payload: index,
});
const setLoader = (value: boolean): EnhanceAction => ({
  type: SET_LOADER,
  payload: value,
});
const setResponseView = (data: any): EnhanceAction => ({
  type: SET_RESPONSE_VIEW,
  payload: data,
});

export { changeTab, setLoader, setResponseView };
