import { combineReducers } from "redux";
import videos from "@/redux/video/videoSlice";
import channel from "@/redux/channelDetails/reducers";

const rootReducer = combineReducers({
  channel,
  videos,
});

export default rootReducer;
