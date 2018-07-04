import {
  put, select, call, takeLatest
} from 'redux-saga/effects';

import NavigationService from '../services/navigator';

// config
import config from '../../config/config.json';

// actions
import { mainLoading } from '../actions/common'
import { USER_LOGIN, IS_AUTH } from '../actions/user';

// selects
import { getIsAuth } from '../selectors/user';

//services
import { login } from '../services/login'

export function* profileLoginProcess({payload: {userName, pass}}) {
  try {
    yield put(mainLoading(true))
    yield call(login, {baseUrl: config.baseUrl, credentials:{user: {userName, password: pass}}})
    yield put(mainLoading(false))
  } catch (e) {
    yield call([console, console.log], e)
  }
}

export function* watchProfileLoginProcess() {
  yield takeLatest(USER_LOGIN, profileLoginProcess);
}


export function* isAuthProcess() {
  try {
    const isAuth = yield select(getIsAuth);
    yield call(NavigationService.navigate, { routeName: (isAuth ? 'Home' : 'LogIn') });
  } catch (e) {
    yield call([console, console.log], e)
  }
}

export function* watchIsAuthProcess() {
  yield takeLatest(IS_AUTH, isAuthProcess);
}
