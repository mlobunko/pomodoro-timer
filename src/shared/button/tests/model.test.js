import {
  IconCog,
  IconMinus,
  IconPause,
  IconPlay,
  IconPlus,
  IconSync,
  IconVolumeOff,
  IconVolumeUp
} from "../icons";

import { getIcon } from "../model";

describe("getIcon", () => {
  it("should handle default", () => {
    const expectedReturn = "OK";
    expect(getIcon()).toEqual(expectedReturn);
  });

  it("should handle 'cog'", () => {
    const expectedReturn = IconCog;
    const iconName = "cog";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'minus'", () => {
    const expectedReturn = IconMinus;
    const iconName = "minus";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'pause'", () => {
    const expectedReturn = IconPause;
    const iconName = "pause";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'play'", () => {
    const expectedReturn = IconPlay;
    const iconName = "play";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'plus'", () => {
    const expectedReturn = IconPlus;
    const iconName = "plus";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'sync'", () => {
    const expectedReturn = IconSync;
    const iconName = "sync";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'volumeOff'", () => {
    const expectedReturn = IconVolumeOff;
    const iconName = "volumeOff";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'volumeUp'", () => {
    const expectedReturn = IconVolumeUp;
    const iconName = "volumeUp";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });
});
