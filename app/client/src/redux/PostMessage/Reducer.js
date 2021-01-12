import {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "./ActionTypes";

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

    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((x) => (x._id == action.payload._id ? action.payload : x)),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((x) => x._id != action.payload),
      };

    default:
      return state;
  }
};
