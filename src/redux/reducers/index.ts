import { combineReducers } from "redux";
import stage from "./stage";
import subscription from "./subscription";
import user from "./user";

export default combineReducers({
  stage,
  subscription,
  user,
});
