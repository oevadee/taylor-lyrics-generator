import { SetNewLyricsAction } from "../actions/lyricsAction";

export interface LyricsState {
  lyrics: {
    quote: string;
    song: string;
    album: string;
  } | null;
}

const initialState = {
  lyrics: null,
};

const lyricsReducer = (
  state: LyricsState = initialState,
  action: SetNewLyricsAction
) => {
  switch (action.type) {
    case "SET_NEW_LYRICS": {
      return {
        ...state,
        lyrics: action.payload,
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
