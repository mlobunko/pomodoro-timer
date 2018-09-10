import * as t from "../actionTypes";
import { close, open } from "../actions";

describe("close", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.CLOSE
    };
    expect(close()).toEqual(expectedAction);
  });
});

describe("open", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.OPEN
    };
    expect(open()).toEqual(expectedAction);
  });
});
