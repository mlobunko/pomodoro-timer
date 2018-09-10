import * as t from "./actionTypes";

export const decreaseTimeBy100Ms = () => ({
  type: t.DECREASE_TIME_BY_100MS
});

export const setTime = time => ({
  type: t.SET_TIME,
  time
});
