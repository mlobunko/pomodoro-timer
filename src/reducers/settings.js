//set settings for timer

export const settingsReducerDefaultState = {
  timePeriodWork: 25,
  timePeriodRest: 5,
  timePeriodBigRest: 25,
  isSound: true
};

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {
    case "INCREASE_TIME_PERIOD_WORK":
      return {
        ...state,
        timePeriodWork:
          state.timePeriodWork < 99
            ? state.timePeriodWork + 1
            : state.timePeriodWork
      };
    case "DECREASE_TIME_PERIOD_WORK":
      return {
        ...state,
        timePeriodWork:
          state.timePeriodWork > 1
            ? state.timePeriodWork - 1
            : state.timePeriodWork
      };
    case "INCREASE_TIME_PERIOD_REST":
      return {
        ...state,
        timePeriodRest:
          state.timePeriodRest < 99
            ? state.timePeriodRest + 1
            : state.timePeriodRest
      };
    case "DECREASE_TIME_PERIOD_REST":
      return {
        ...state,
        timePeriodRest:
          state.timePeriodRest > 1
            ? state.timePeriodRest - 1
            : state.timePeriodRest
      };
    case "INCREASE_TIME_PERIOD_BIG_REST":
      return {
        ...state,
        timePeriodBigRest:
          state.timePeriodBigRest < 99
            ? state.timePeriodBigRest + 1
            : state.timePeriodBigRest
      };
    case "DECREASE_TIME_PERIOD_BIG_REST":
      return {
        ...state,
        timePeriodBigRest:
          state.timePeriodBigRest > 1
            ? state.timePeriodBigRest - 1
            : state.timePeriodBigRest
      };
    case "CHANGE_IS_SOUND":
      return {
        ...state,
        isSound: !state.isSound
      };
    default:
      return state;
  }
};
