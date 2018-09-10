import React from "react";
import PropTypes from "prop-types";

import { StyledTomatoComponent } from "./styles";

export const TomatoComponent = ({ time, isWorkingTime, msToMinSec }) => (
  <StyledTomatoComponent isWorkingTime={isWorkingTime}>
    {msToMinSec(time)}
  </StyledTomatoComponent>
);

TomatoComponent.displayName = "Tomato";

export default TomatoComponent;

TomatoComponent.propTypes = {
  time: PropTypes.number.isRequired,
  isWorkingTime: PropTypes.bool.isRequired,
  msToMinSec: PropTypes.func.isRequired
};
