import * as t from "./actionTypes";

export const initialState = 5;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.INCREASE:
      return state < 99 ? state + 1 : state;
    case t.DECREASE:
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};
