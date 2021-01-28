import { SAVE_CHARACTERS, SAVE_URL } from "./types";

const initialState = {
  characters: [],
  url: "",
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    case SAVE_URL: {
      return {
        ...state,
        url: action.payload,
      };
    }
    default:
      return state;
  }
};
