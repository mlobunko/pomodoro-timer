import * as t from "./actionTypes";

export const initialState = {
  timerOn: false,
  isWorkingTime: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_TIMER_ON_FALSE:
      return {
        ...state,
        timerOn: false
      };
    case t.SET_TIMER_ON_TRUE:
      return {
        ...state,
        timerOn: true
      };
    case t.SET_WORKING_TIME_FALSE:
      return {
        ...state,
        isWorkingTime: false
      };
    case t.SET_WORKING_TIME_TRUE:
      return {
        ...state,
        isWorkingTime: true
      };
    default:
      return state;
  }
};
