import { EmptyObject } from "redux";
import { ICombinedReducers } from "../store";
import { LyricsState } from "../types/lyricsTypes";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("lyrics");
    if (serializedState) return JSON.parse(serializedState);
    return undefined;
  } catch (err) {
    console.error("There was an error: ", err);
    return undefined;
  }
};

export const saveState = (state: EmptyObject & ICombinedReducers) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("lyrics", serializedState);
  } catch (err) {
    console.error("There was an error: ", err);
    return undefined;
  }
};
