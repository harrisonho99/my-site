import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import methodsReducers from './methodsReducers';
import formReducer from './formReducer';
import requestReducers from './requestReducers';
import responseReducer from './responseReducer';

const _ALL_REDUCERS_ = {
  tabs: tabsReducer,
  methods: methodsReducers,
  form: formReducer,
  request: requestReducers,
  response: responseReducer,
};

const rootReducer = combineReducers(_ALL_REDUCERS_);

export { rootReducer };
