import {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "./ActionTypes";
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

const createNewPost = (data) => {
  return {
    type: CREATE_POST,
    payload: data,
  };
};

const updatePostById = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

const deletePostById = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};

export const fetchPosts = () => (dispatch) => {
  return httpClient
    .getPosts()
    .then((response) => {
      // console.log(response.data);
      dispatch(fetchPostSuccess(response.data));
    })
    .catch((error) => {
      //console.log(error);
      dispatch(fetchPostFailure());
    });
};

export const create = (data, onSuccess) => (dispatch) => {
  httpClient
    .createPost(data)
    .then((response) => {
      // console.log(response.data);
      dispatch(createNewPost(response.data));
      onSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const update = (id, data, onSuccess) => (dispatch) => {
  console.log(id, data, onSuccess)
  httpClient
    .updatePost(id, data)
    .then((response) => {
      dispatch(updatePostById(response.data));
      onSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deletePost = (id, onSuccess) => (dispatch) => {
  httpClient
    .deletePost(id)
    .then((response) => {
      dispatch(deletePostById(id));
      onSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};
