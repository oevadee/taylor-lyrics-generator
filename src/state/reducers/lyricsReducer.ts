import {
  LyricsAction,
  LyricsActionType,
  ILyrics,
  LyricsState,
} from "../types/lyricsTypes";

const initialState = {
  lyrics: null,
  faveLyrics: [],
};

const lyricsReducer = (
  state: LyricsState = initialState,
  action: LyricsAction
) => {
  switch (action.type) {
    case LyricsActionType.SHOW_NEW_LYRICS: {
      return {
        ...state,
        lyrics: action.payload,
      };
    }
    case LyricsActionType.ADD_NEW_FAVE_LYRICS: {
      return {
        ...state,
        faveLyrics: [...state.faveLyrics, action.payload],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default lyricsReducer;
