import React from "react";

import SettingsMain from "app/settings/main/components";
import TimerMain from "app/timer/main/components";

import ErrorBoundary from "./ErrorBoundary";
import { StyledGlobal } from "./styles";

export const MainComponent = ({ isSettingsOpen }) => (
  <ErrorBoundary>
    <StyledGlobal>
      {isSettingsOpen ? <SettingsMain /> : <TimerMain />}
    </StyledGlobal>
  </ErrorBoundary>
);

MainComponent.displayName = "Main";

export default MainComponent;
