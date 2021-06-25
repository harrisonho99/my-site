import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import methodsReducers from './methodsReducers';
import formReducer from './formReducer';
const _ALL_REDUCERS_ = {
  tabs: tabsReducer,
  methods: methodsReducers,
  form: formReducer,
};

const rootReducer = combineReducers(_ALL_REDUCERS_);

export { rootReducer };
