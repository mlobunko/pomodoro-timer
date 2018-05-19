export const statisticsReducerDefaultState = {
  displayTimer: 1500, //25mins
  timerOn: false,
  isWorkingTime: true,
  numberPeriodsThatPassed: 0 //max is 4 including 0
};

export default (state = statisticsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_DISPLAY_TIMER":
      return {
        ...state,
        displayTimer: action.displayTimer
      };
    case "DECREASE_DISPLAY_TIMER_BY_100MS":
      return {
        ...state,
        displayTimer: state.displayTimer - 100
      };
    case "TIMER_ON_TRUE":
      return {
        ...state,
        timerOn: true
      };
    case "TIMER_ON_FALSE":
      return {
        ...state,
        timerOn: false
      };
    case "IS_WORKING_TIME_TO_TRUE":
      return {
        ...state,
        isWorkingTime: true
      };
    case "IS_WORKING_TIME_TO_FALSE":
      return {
        ...state,
        isWorkingTime: false
      };
    //we have just 4 periods, and wait for reset in big rest time so use module operator 5
    case "ADD_ONE_PERIOD":
      return {
        ...state,
        numberPeriodsThatPassed: (state.numberPeriodsThatPassed + 1) % 5
      };
    case "RESET_PERIODS":
      return {
        ...state,
        numberPeriodsThatPassed: 0
      };
    default:
      return state;
  }
};
