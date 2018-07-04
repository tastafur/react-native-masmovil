export const USER_LOGIN = 'USER_LOGIN';
export const IS_AUTH = 'IS_AUTH';
export const SET_AUTH_CREDENTIALS = 'SET_AUTH_CREDENTIALS';

export function userLogin({userName, pass}) {
  return {
    type: USER_LOGIN,
    payload: {
      userName,
      pass
    }
  };
}
export function isAuth() {
  return {
    type: IS_AUTH
  };
}

export function setAuthCredentials({userName, isAuth}) {
  return {
    type: SET_AUTH_CREDENTIALS,
    payload: {
      userName: userName,
      isAuth: isAuth
    }
  };
}
