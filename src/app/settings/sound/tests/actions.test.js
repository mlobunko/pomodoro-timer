import * as t from "../actionTypes";
import { change } from "../actions";

describe("change", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.CHANGE
    };
    expect(change()).toEqual(expectedAction);
  });
});
