import {
  SET_ERROR,
  CLEAR_ERROR,
  HIDE_ERROR
} from '../actions/error';

const initialError = {
  message: '',
  showError: false
};

export function error(state = initialError, { type, payload }) {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        message: payload.message,
        showError: true
      };
    case CLEAR_ERROR:
      return {
        ...state,
        message: '',
        showError: false
      };
    case HIDE_ERROR:
      return {
        ...state,
        showError: false
      };
    default:
      return state;
  }
}
