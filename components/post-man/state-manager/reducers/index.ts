import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import methodsReducers from './methodsReducers';
import formReducer from './formReducer';
import requestReducers from './requestReducers';
import responseReducer from './responseReducer';
import renderReducer from './renderReducer';

const _ALL_REDUCERS_ = {
  tabs: tabsReducer,
  methods: methodsReducers,
  form: formReducer,
  request: requestReducers,
  response: responseReducer,
  render: renderReducer,
};

const rootReducer = combineReducers(_ALL_REDUCERS_);

export { rootReducer };
