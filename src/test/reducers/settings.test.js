import { settingsReducerDefaultState } from "../../reducers/settings";
import settings from "../../reducers/settings";

it("should set default state", () => {
  const state = settings(undefined, { type: "@@INIT" });
  expect(state).toEqual(settingsReducerDefaultState);
});

it("should increase timePeriodWork", () => {
  const action = {
    type: "INCREASE_TIME_PERIOD_WORK"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 26,
    timePeriodRest: 5,
    timePeriodBigRest: 25,
    isSound: true
  });
});

it("should decrease timePeriodWork", () => {
  const action = {
    type: "DECREASE_TIME_PERIOD_WORK"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 24,
    timePeriodRest: 5,
    timePeriodBigRest: 25,
    isSound: true
  });
});

it("should increase timePeriodRest", () => {
  const action = {
    type: "INCREASE_TIME_PERIOD_REST"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 25,
    timePeriodRest: 6,
    timePeriodBigRest: 25,
    isSound: true
  });
});

it("should decrease timePeriodRest", () => {
  const action = {
    type: "DECREASE_TIME_PERIOD_REST"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 25,
    timePeriodRest: 4,
    timePeriodBigRest: 25,
    isSound: true
  });
});

it("should increase timePeriodBigRest", () => {
  const action = {
    type: "INCREASE_TIME_PERIOD_BIG_REST"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 25,
    timePeriodRest: 5,
    timePeriodBigRest: 26,
    isSound: true
  });
});

it("should decrease timePeriodBigRest", () => {
  const action = {
    type: "DECREASE_TIME_PERIOD_BIG_REST"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 25,
    timePeriodRest: 5,
    timePeriodBigRest: 24,
    isSound: true
  });
});

it("should change boolean isSound", () => {
  const action = {
    type: "CHANGE_IS_SOUND"
  };
  const state = settings(undefined, action);
  expect(state).toEqual({
    timePeriodWork: 25,
    timePeriodRest: 5,
    timePeriodBigRest: 25,
    isSound: false
  });
});
