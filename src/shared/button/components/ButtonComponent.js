import React from "react";
import PropTypes from "prop-types";

import * as model from "../model";
import { StyledButton } from "./styles";

export const ButtonComponent = ({ icon, round, side, onClick }) => (
  <StyledButton round={round} side={side} onClick={onClick}>
    {model.getIcon(icon)}
  </StyledButton>
);
ButtonComponent.displayName = "Button";

export default ButtonComponent;

ButtonComponent.proptypes = {
  icon: PropTypes.string.isRequired,
  round: PropTypes.bool,
  side: PropTypes.bool,
  onClick: PropTypes.func
};
