import { all, fork } from 'redux-saga/effects';

import {
  watchProfileLoginProcess,
  watchIsAuthProcess
  //watchProfileLogoutProcess,
} from './auth';


export default function* rootSagas() {
  yield all([
    fork(watchProfileLoginProcess),
    fork(watchIsAuthProcess),
    //fork(watchProfileLogoutProcess),
  ]);
}
