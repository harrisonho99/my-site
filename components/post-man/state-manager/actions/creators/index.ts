import { EnhanceAction } from '../../schema/type';
import { CHANGE_TAB } from '../index';
const changeTab = (index: number): EnhanceAction => ({
  type: CHANGE_TAB,
  payload: index,
});
export { changeTab };
