import * as t from "./actionTypes";

export const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.OPEN:
      return true;
    case t.CLOSE:
      return false;
    default:
      return state;
  }
};
