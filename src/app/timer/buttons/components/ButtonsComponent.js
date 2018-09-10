import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

import CenterButton from "./CenterButtonContainer";
import { StyledButtonsComponent } from "./styles";

export const ButtonsComponent = ({ openSettings, resetTimer }) => (
  <StyledButtonsComponent>
    <Button side icon="cog" onClick={openSettings} />
    <CenterButton />
    <Button side icon="sync" onClick={resetTimer} />
  </StyledButtonsComponent>
);

ButtonsComponent.displayName = "Buttons";

export default ButtonsComponent;

ButtonsComponent.propTypes = {
  openSettings: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired
};
