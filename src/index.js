import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

import { configureStore } from './configureStore'

import { AppNavigator } from './navigators/AppNavigator'

import NavigationService from './services/navigator';

import { isAuth } from './actions/user';

const { store, persistor } = configureStore();

export const reactNativeMasmovil = () =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
        store.dispatch(isAuth())
      }}/>
    </PersistGate>
  </Provider>;
