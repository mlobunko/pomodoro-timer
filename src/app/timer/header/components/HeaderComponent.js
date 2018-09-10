import React from "react";

import { IconInfo } from "../icons";
import { StyledHeader, StyledTomatoIcon, StyledInfo } from "./styles";

export const HeaderComponent = () => (
  <StyledHeader>
    P<StyledTomatoIcon />
    omodoro Timer
    <StyledInfo>
      <a
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="wiki link on article about Pomodoro Technique"
      >
        <IconInfo />
      </a>
    </StyledInfo>
  </StyledHeader>
);

HeaderComponent.displayName = "Header";

export default HeaderComponent;
