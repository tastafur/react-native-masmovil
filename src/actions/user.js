export const USER_LOGIN = 'USER_LOGIN';
export const IS_AUTH = 'IS_AUTH';
export const SET_AUTH_CREDENTIALS = 'SET_AUTH_CREDENTIALS';

export function userLogin({email, password}) {
  return {
    type: USER_LOGIN,
    payload: {
      email,
      password
    }
  };
}
export function isAuth() {
  return {
    type: IS_AUTH
  };
}

export function setAuthCredentials({email, isAuth}) {
  return {
    type: SET_AUTH_CREDENTIALS,
    payload: {
      email: email,
      isAuth: isAuth
    }
  };
}
