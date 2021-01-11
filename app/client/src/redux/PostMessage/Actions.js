import { FETCH_POST } from "./ActionTypes";

const fetchPost = (data) => {
  return {
    type: FETCH_POST,
    payload: data,
  };
};
