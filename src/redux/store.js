import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import videoReducer from "@/redux/channelDetails/reducers";
import {
  watchFetchChannelDetails,
  watchFetchVideoById,
  watchFetchVideos,
} from "./channelDetails/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(videoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchVideos);
sagaMiddleware.run(watchFetchVideoById);
sagaMiddleware.run(watchFetchChannelDetails);

export default store;
