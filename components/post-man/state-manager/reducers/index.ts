import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';

const _ALL_REDUCERS_ = { tabs: tabsReducer };

const rootReducer = combineReducers(_ALL_REDUCERS_);

export { rootReducer };
