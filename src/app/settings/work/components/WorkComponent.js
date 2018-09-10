import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

import * as model from "../../model";
import { StyledInputs, StyledInput } from "../../styles";

export const WorkComponent = ({ time, increaseTime, decreaseTime }) => (
  <React.Fragment>
    <div>Work</div>
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

WorkComponent.displayName = "Work";

export default WorkComponent;

WorkComponent.propTypes = {
  time: PropTypes.number.isRequired,
  increaseTime: PropTypes.func.isRequired,
  decreaseTime: PropTypes.func.isRequired
};
