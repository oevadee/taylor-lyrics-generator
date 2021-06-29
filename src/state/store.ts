import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import lyricsReducer from "./reducers/lyricsReducer";

const rootReducer = combineReducers({
  lyrics: lyricsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
