import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import { applyMiddleware } from 'redux';
import { initial as initialState } from './initial';
import { middlewares } from './middlewares';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
