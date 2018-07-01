import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootReducer from './reducers';
import rootSagas from './sagas';

const composeEnhancers = global.__DEV__
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    RootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
