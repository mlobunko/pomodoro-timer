import * as t from "./actionTypes";

export const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return (state + 1) % 5;
    case t.RESET:
      return 0;
    default:
      return state;
  }
};
