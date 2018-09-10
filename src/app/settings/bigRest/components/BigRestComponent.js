import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

import * as model from "../../model";
import { StyledInput, StyledInputs } from "../../styles";

export const BigRestComponent = ({ time, increaseTime, decreaseTime }) => (
  <React.Fragment>
    <div>BigRest</div>
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

BigRestComponent.displayName = "BigRest";

export default BigRestComponent;

BigRestComponent.propTypes = {
  time: PropTypes.number.isRequired,
  increaseTime: PropTypes.func.isRequired,
  decreaseTime: PropTypes.func.isRequired
};
