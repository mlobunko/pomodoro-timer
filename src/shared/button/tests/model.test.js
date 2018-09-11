import React from "react";
import {
  faCog,
  faMinus,
  faPause,
  faPlay,
  faPlus,
  faSync,
  faVolumeOff,
  faVolumeUp
} from "@fortawesome/free-solid-svg-icons";

import { StyledFontAwesomeIcon } from "../styles";

import { getIcon } from "../model";

describe("getIcon", () => {
  it("should handle default", () => {
    const expectedReturn = "OK";
    expect(getIcon()).toEqual(expectedReturn);
  });

  it("should handle 'cog'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faCog} />;
    const iconName = "cog";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'minus'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faMinus} />;
    const iconName = "minus";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'pause'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faPause} />;
    const iconName = "pause";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'play'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faPlay} />;
    const iconName = "play";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'plus'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faPlus} />;
    const iconName = "plus";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'sync'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faSync} />;
    const iconName = "sync";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'volumeOff'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faVolumeOff} />;
    const iconName = "volumeOff";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });

  it("should handle 'volumeUp'", () => {
    const expectedReturn = <StyledFontAwesomeIcon icon={faVolumeUp} />;
    const iconName = "volumeUp";
    expect(getIcon(iconName)).toEqual(expectedReturn);
  });
});
