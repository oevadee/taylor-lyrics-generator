export interface ILyrics {
  uuid: string;
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
  REMOVE_FAVE_LYRICS = "REMOVE_FAVE_LYRICS",
}

interface ShowNewLyricsAction {
  type: LyricsActionType.SHOW_NEW_LYRICS;
  payload: ILyrics;
}

interface AddNewFaveLyrics {
  type: LyricsActionType.ADD_NEW_FAVE_LYRICS;
  payload: ILyrics;
}

interface RemoveFaveLyrics {
  type: LyricsActionType.REMOVE_FAVE_LYRICS;
  payload: string;
}

export type LyricsAction =
  | ShowNewLyricsAction
  | AddNewFaveLyrics
  | RemoveFaveLyrics;
