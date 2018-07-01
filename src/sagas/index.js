import { all, fork } from 'redux-saga/effects';

import {
  watchProfileLoginProcess,
  //watchProfileLogoutProcess,
} from './auth';


export default function* rootSagas() {
  yield all([
    fork(watchProfileLoginProcess),
    //fork(watchProfileLogoutProcess),
  ]);
}
