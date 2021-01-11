import { FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./ActionTypes";

const initialState = {
  posts: [],
};

export const PostMessage = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case FETCH_POST_FAILURE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
