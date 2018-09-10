import * as t from "../actionTypes";
import { add, reset } from "../actions";

describe("add", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.ADD
    };
    expect(add()).toEqual(expectedAction);
  });
});

describe("reset", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.RESET
    };
    expect(reset()).toEqual(expectedAction);
  });
});
