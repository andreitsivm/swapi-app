import { FETCH_CHARACTERS, SAVE_CHARACTERS, SAVE_URL } from "./types";

export const fetchCharacters = () => ({ type: FETCH_CHARACTERS });
export const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  payload: characters,
});

export const saveUrl = (url) => ({ type: SAVE_URL, payload: url });
