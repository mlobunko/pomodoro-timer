import {
  increaseTimePeriodWork,
  decreaseTimePeriodWork,
  increaseTimePeriodRest,
  decreaseTimePeriodRest,
  increaseTimePeriodBigRest,
  decreaseTimePeriodBigRest,
  changeIsSound
} from "../../actions/settings";

it("should create an action to increase timePeriodWork", () => {
  const expectedAction = {
    type: "INCREASE_TIME_PERIOD_WORK"
  };
  expect(increaseTimePeriodWork()).toEqual(expectedAction);
});

it("should create an action to decrease timePeriodWork", () => {
  const expectedAction = {
    type: "DECREASE_TIME_PERIOD_WORK"
  };
  expect(decreaseTimePeriodWork()).toEqual(expectedAction);
});

it("sould create an action to increase timePeriodRest", () => {
  const expectedAction = {
    type: "INCREASE_TIME_PERIOD_REST"
  };
  expect(increaseTimePeriodRest()).toEqual(expectedAction);
});

it("should create an action to decrease timePeriodRest", () => {
  const expectedAction = {
    type: "DECREASE_TIME_PERIOD_REST"
  };
  expect(decreaseTimePeriodRest()).toEqual(expectedAction);
});

it("should create an action to increase timePeriodBigRest", () => {
  const expectedAction = {
    type: "INCREASE_TIME_PERIOD_BIG_REST"
  };
  expect(increaseTimePeriodBigRest()).toEqual(expectedAction);
});

it("should create an action to decrease timePeriodBigRest", () => {
  const expectedAction = {
    type: "DECREASE_TIME_PERIOD_BIG_REST"
  };
  expect(decreaseTimePeriodBigRest()).toEqual(expectedAction);
});

it("should change boolean isSound", () => {
  const expectedAction = {
    type: "CHANGE_IS_SOUND"
  };
  expect(changeIsSound()).toEqual(expectedAction);
});
