import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

export const CenterButtonComponent = ({ pauseTimer, startTimer, timerOn }) => (
  <React.Fragment>
    {timerOn ? (
      <Button icon="pause" onClick={pauseTimer} />
    ) : (
      <Button icon="play" onClick={startTimer} />
    )}
  </React.Fragment>
);

CenterButtonComponent.displayName = "CenterButton";

export default CenterButtonComponent;

CenterButtonComponent.propTypes = {
  pauseTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  timerOn: PropTypes.bool.isRequired
};
