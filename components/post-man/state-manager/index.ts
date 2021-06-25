import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import { applyMiddleware } from 'redux';
import { middlewares } from './middlewares';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeStore = () =>
  createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
  );

export { makeStore };
