import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import methodsReducers from './methodsReducers';
const _ALL_REDUCERS_ = { tabs: tabsReducer, methods: methodsReducers };

const rootReducer = combineReducers(_ALL_REDUCERS_);

export { rootReducer };
