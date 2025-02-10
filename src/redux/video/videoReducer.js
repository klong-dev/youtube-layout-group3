import { combineReducers } from "redux";
import videos from "@/redux/video/videoSlice";

const rootReducer = combineReducers({
  videos,
});

export default rootReducer;
