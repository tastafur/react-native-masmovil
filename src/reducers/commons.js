import { IS_LOADING } from '../actions/common'

const initialCommons = {
  isLoading: false
};

export function commons(state = initialCommons, { type, payload }) {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    default:
      return state;
  }
}
