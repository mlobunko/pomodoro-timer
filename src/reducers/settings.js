//set settings for timer

export const settingsReducerDefaultState = {
  timePeriodWork: 0.5,
  timePeriodRest: 0.5,
  timePeriodBigRest: 1
};

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
