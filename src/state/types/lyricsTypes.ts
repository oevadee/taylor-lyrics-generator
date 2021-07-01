export interface ILyrics {
  quote: string;
  song: string;
  album: string;
}

export type LyricsState = {
  lyrics: ILyrics | null;
  faveLyrics: ILyrics[] | [];
};

export enum LyricsActionType {
  SHOW_NEW_LYRICS = "SHOW_NEW_LYRICS",
  ADD_NEW_FAVE_LYRICS = "ADD_NEW_FAVELYRICS",
}

interface ShowNewLyricsAction {
  type: LyricsActionType.SHOW_NEW_LYRICS;
  payload: ILyrics;
}

interface AddNewFaveLyrics {
  type: LyricsActionType.ADD_NEW_FAVE_LYRICS;
  payload: ILyrics;
}

export type LyricsAction = ShowNewLyricsAction | AddNewFaveLyrics;
