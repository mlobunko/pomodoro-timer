import React from "react";
import { connect } from "react-redux";
import { increaseTimePeriodBigRest } from "../../actions/settings";

export const ButtonIncreaseTimePeriodBigRest = ({
  increaseTimePeriodBigRest
}) => (
  <button onClick={increaseTimePeriodBigRest} className="button-plus-minus">
    <i class="fa fa-plus" />
  </button>
);

export default connect(undefined, { increaseTimePeriodBigRest })(
  ButtonIncreaseTimePeriodBigRest
);
