import { LyricsState } from "../reducers/lyricsReducer";

export type SetNewLyricsAction = {
  type: "SET_NEW_LYRICS";
  payload: {
    quote: string;
    song: string;
    album: string;
  } | null;
};

export const setNewLyrics = (
  lyrics: {
    quote: string;
    song: string;
    album: string;
  } | null
): SetNewLyricsAction => ({
  type: "SET_NEW_LYRICS",
  payload: lyrics,
});
