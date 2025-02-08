import { combineReducers } from "redux";
import videos from "./videoSlice.jsx";

const rootReducer = combineReducers({
  videos,
});

export default rootReducer;
