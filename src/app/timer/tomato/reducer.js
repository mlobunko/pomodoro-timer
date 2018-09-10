import * as t from "./actionTypes";

export const initialState = 1500000;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_TIME:
      return action.time;
    case t.DECREASE_TIME_BY_100MS:
      return state - 100;
    default:
      return state;
  }
};
