import { FETCH_POST } from "./ActionTypes";

const initialState = {
  posts: [],
};

export const PostMessage = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
