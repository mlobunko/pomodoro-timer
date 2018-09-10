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

export const IconCog = () => <StyledFontAwesomeIcon icon={faCog} />;
IconCog.displayName = "IconCog";

export const IconMinus = () => <StyledFontAwesomeIcon icon={faMinus} />;
IconMinus.displayName = "IconMinus";

export const IconPause = () => <StyledFontAwesomeIcon icon={faPause} />;
IconPause.displayName = "IconPause";

export const IconPlay = () => <StyledFontAwesomeIcon icon={faPlay} />;
IconPlay.displayName = "IconPlay";

export const IconPlus = () => <StyledFontAwesomeIcon icon={faPlus} />;
IconPlus.displayName = "IconPlus";

export const IconSync = () => <StyledFontAwesomeIcon icon={faSync} />;
IconSync.displayName = "IconSync";

export const IconVolumeOff = () => <StyledFontAwesomeIcon icon={faVolumeOff} />;
IconVolumeOff.displayName = "IconVolumeOff";

export const IconVolumeUp = () => <StyledFontAwesomeIcon icon={faVolumeUp} />;
IconVolumeUp.displayName = "IconVolumeUp";
