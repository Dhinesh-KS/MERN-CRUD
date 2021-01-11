import { combineReducers } from "redux";
import { PostMessage } from "./PostMessage/Reducer";

export const rootReducer = combineReducers({
  PostMessage,
});
