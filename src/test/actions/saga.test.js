import { startTimer, resetTimer } from "../../actions/saga";

it("should create an action startTimer in saga", () => {
  const expectedAction = {
    type: "START_TIMER"
  };
  expect(startTimer()).toEqual(expectedAction);
});

it("should create an action resetTimer in saga", () => {
  const expectedAction = {
    type: "RESET_TIMER"
  };
  expect(resetTimer()).toEqual(expectedAction);
});
