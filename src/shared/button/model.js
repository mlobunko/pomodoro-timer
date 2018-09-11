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

import { StyledFontAwesomeIcon } from "./styles";

export const getIcon = iconName => {
  switch (iconName) {
    case "cog":
      return <StyledFontAwesomeIcon icon={faCog} />;
    case "minus":
      return <StyledFontAwesomeIcon icon={faMinus} />;
    case "pause":
      return <StyledFontAwesomeIcon icon={faPause} />;
    case "play":
      return <StyledFontAwesomeIcon icon={faPlay} />;
    case "plus":
      return <StyledFontAwesomeIcon icon={faPlus} />;
    case "sync":
      return <StyledFontAwesomeIcon icon={faSync} />;
    case "volumeOff":
      return <StyledFontAwesomeIcon icon={faVolumeOff} />;
    case "volumeUp":
      return <StyledFontAwesomeIcon icon={faVolumeUp} />;
    default:
      return "OK";
  }
};
