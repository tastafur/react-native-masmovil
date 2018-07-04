import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = global.__DEV__
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
)

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    enhancer
  );

  sagaMiddleware.run(rootSagas);

  const persistor = persistStore(store);

  return { store, persistor };
}
