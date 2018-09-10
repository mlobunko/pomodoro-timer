import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

import * as model from "../../model";
import { StyledInput, StyledInputs } from "../../styles";

export const RestComponent = ({ time, increaseTime, decreaseTime }) => (
  <React.Fragment>
    <div>Rest</div>
    <StyledInputs>
      <StyledInput>
        <Button round icon="minus" onClick={decreaseTime} />
      </StyledInput>
      <StyledInput>{model.displayTime(time)}</StyledInput>
      <StyledInput>
        <Button round icon="plus" onClick={increaseTime} />
      </StyledInput>
    </StyledInputs>
  </React.Fragment>
);

RestComponent.displayName = "Rest";

export default RestComponent;

RestComponent.propTypes = {
  time: PropTypes.number.isRequired,
  increaseTime: PropTypes.func.isRequired,
  decreaseTime: PropTypes.func.isRequired
};
