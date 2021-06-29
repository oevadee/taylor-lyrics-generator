import { SetNewLyricsAction } from "../actions/lyricsAction";

interface LyricsState {
  lyrics: string;
}

const initialState = {
  lyrics: "",
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
