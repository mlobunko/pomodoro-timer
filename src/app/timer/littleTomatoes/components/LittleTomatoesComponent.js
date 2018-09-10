import React from "react";

import LittleTomato from "./LittleTomatoContainer";
import { StyledLittleTomatoesComponent } from "./styles";

export const LittleTomatoesComponent = () => (
  <StyledLittleTomatoesComponent>
    <LittleTomato order={0} />
    <LittleTomato order={1} />
    <LittleTomato order={2} />
    <LittleTomato order={3} />
  </StyledLittleTomatoesComponent>
);

LittleTomatoesComponent.displayName = "LittleTomatoes";

export default LittleTomatoesComponent;
