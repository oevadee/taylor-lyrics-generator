import { LyricsActionType, LyricsAction } from "../types/lyricsTypes";
import { Dispatch } from "redux";

interface ILyrics {
  quote: string;
  song: string;
  album: string;
}

export const showNewLyrics =
  (lyrics: ILyrics) => (dispatch: Dispatch<LyricsAction>) =>
    dispatch({
      type: LyricsActionType.SHOW_NEW_LYRICS,
      payload: lyrics,
    });

export const addNewFaveLyrics = (lyrics: ILyrics) => ({
  type: LyricsActionType.ADD_NEW_FAVE_LYRICS,
  payload: lyrics,
});
