import { createSelector } from "reselect";

const peopleSelector = (state) => state.people;

export const charactersSelector = createSelector(
  peopleSelector,
  ({ characters }) => characters
);

export const urlSelector = createSelector(peopleSelector, ({ url }) => url);
