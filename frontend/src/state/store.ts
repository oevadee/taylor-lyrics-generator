import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import lyricsReducer from "./reducers/lyricsReducer";
import logger from "redux-logger";
import { LyricsState } from "./types/lyricsTypes";
import { loadState, saveState } from "./middlewares/localStorage";
import throttle from "lodash/throttle";

export interface ICombinedReducers {
  lyrics: LyricsState;
}

const rootReducer = combineReducers<ICombinedReducers>({
  lyrics: lyricsReducer,
});

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
