import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@/redux/rootReducer";
import rootSaga from "@/redux/video/sagas";
import {
  watchFetchChannelDetails,
  watchFetchVideoById,
  watchFetchVideos,
} from "@/redux/channelDetails/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

function* combinedSaga() {
  yield* rootSaga();
  yield* watchFetchVideos();
  yield* watchFetchVideoById();
  yield* watchFetchChannelDetails();
}

sagaMiddleware.run(combinedSaga);

export default store;
