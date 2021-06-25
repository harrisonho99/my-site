import { EnhanceAction } from '../../schema/type';
import { CHANGE_TAB, SET_LOADER } from '../index';

const changeTab = (index: number): EnhanceAction => ({
  type: CHANGE_TAB,
  payload: index,
});
const setLoader = (value: boolean): EnhanceAction => ({
  type: SET_LOADER,
  payload: value,
});
export { changeTab, setLoader };
