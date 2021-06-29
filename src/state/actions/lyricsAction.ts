export type SetNewLyricsAction = {
  type: "SET_NEW_LYRICS";
  payload: string;
};

export const setNewLyrics = (lyrics: string): SetNewLyricsAction => ({
  type: "SET_NEW_LYRICS",
  payload: lyrics,
});
