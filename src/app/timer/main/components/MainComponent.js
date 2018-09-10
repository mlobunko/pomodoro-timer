import React from "react";

import Buttons from "../../buttons/components";
import Header from "../../header/components";
import Tomato from "../../tomato/components";
import LittleTomatoes from "../../littleTomatoes/components";
import {
  StyledBackground,
  StyledCenterOfPage,
  StyledFront,
  StyledPage
} from "./styles";

export const MainComponent = () => (
  <React.Fragment>
    <StyledBackground />
    <StyledFront>
      <StyledPage>
        <Header />
        <StyledCenterOfPage>
          <Tomato />
          <LittleTomatoes />
        </StyledCenterOfPage>
        <Buttons />
      </StyledPage>
    </StyledFront>
  </React.Fragment>
);

MainComponent.displayName = "TimerMain";

export default MainComponent;
