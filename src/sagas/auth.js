import {
  put, select, call, takeLatest
} from 'redux-saga/effects';

// actions
import { mainLoading } from '../actions/common'
import { USER_LOGIN } from '../actions/user';

//services
import { login } from '../services/login'

export function* profileLoginProcess({payload: {userName, pass}}) {
  try {
    yield put(mainLoading(true))
    yield call(login, {})
  } catch (e) {
    yield call([console, console.log], e)
  }
}

export function* watchProfileLoginProcess() {
  yield takeLatest(USER_LOGIN, profileLoginProcess);
}
