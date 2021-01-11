import { FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./ActionTypes";
import { httpClient } from "../../services/api/Provider";

const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

const fetchPostFailure = () => {
  return {
    type: FETCH_POST_FAILURE,
  };
};

export const fetchPosts = () => (dispatch) => {
  return httpClient
    .getPosts()
    .then((response) => {
      console.log(response);
      dispatch(fetchPostSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchPostFailure());
    });
};
