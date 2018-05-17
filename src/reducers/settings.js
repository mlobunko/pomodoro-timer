//set settings for timer

export const settingsReducerDefaultState = {
  timePeriodWork: 25,
  timePeriodRest: 5,
  timePeriodBigRest: 25
};

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
