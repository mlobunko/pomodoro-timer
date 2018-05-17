import { settingsReducerDefaultState } from "../../reducers/settings";
import settings from "../../reducers/settings";

it("should set default state", () => {
  const state = settings(undefined, { type: "@@INIT" });
  expect(state).toEqual(settingsReducerDefaultState);
});
