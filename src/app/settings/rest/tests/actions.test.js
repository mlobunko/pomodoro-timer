import * as t from "../actionTypes";
import { decrease, increase } from "../actions";

describe("decrease", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.DECREASE
    };
    expect(decrease()).toEqual(expectedAction);
  });
});

describe("increase", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.INCREASE
    };
    expect(increase()).toEqual(expectedAction);
  });
});
