import * as t from "./actionTypes";

export const initialState = true;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.CHANGE:
      return !state;
    default:
      return state;
  }
};
