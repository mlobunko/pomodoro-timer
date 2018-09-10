import { NAME } from "../constants";
import { NAME as PARENT_NAME } from "../../constants";
import { getAll } from "../selectors";

describe("getAll", () => {
  it("return right state", () => {
    const state = {
      [PARENT_NAME]: {
        [NAME]: "true"
      }
    };
    expect(getAll(state)).toEqual(state[PARENT_NAME][NAME]);
  });
});
