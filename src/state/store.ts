import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import lyricsReducer, { LyricsState } from "./reducers/lyricsReducer";

export interface ICombinedReducers {
  lyrics: LyricsState;
}

const rootReducer = combineReducers({
  lyrics: lyricsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
