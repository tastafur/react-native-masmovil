import { SET_AUTH_CREDENTIALS } from '../actions/user'

const initialUser = {
  isAuth: false
};

export function user(state = initialUser, { type, payload }) {
  switch (type) {
    case SET_AUTH_CREDENTIALS:
      return {
        ...state,
        email: payload.email,
        isAuth: payload.isAuth
      };
    default:
      return state;
  }
}
