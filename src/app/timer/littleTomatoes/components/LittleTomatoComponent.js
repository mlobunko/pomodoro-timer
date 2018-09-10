import React from "react";
import PropTypes from "prop-types";

import { StyledAnimatedLittleTomato, StyledLittleTomato } from "./styles";

export const LittleTomatoComponent = ({
  isWorkingTime,
  numberOfLittleTomatoes,
  order,
  timerOn
}) => (
  <React.Fragment>
    {timerOn && isWorkingTime && numberOfLittleTomatoes === order ? (
      <StyledAnimatedLittleTomato />
    ) : (
      numberOfLittleTomatoes > order && <StyledLittleTomato />
    )}
  </React.Fragment>
);

LittleTomatoComponent.displayName = "LittleTomato";

export default LittleTomatoComponent;

LittleTomatoComponent.propTypes = {
  isWorkingTime: PropTypes.bool.isRequired,
  numberOfLittleTomatoes: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  timerOn: PropTypes.bool.isRequired
};
