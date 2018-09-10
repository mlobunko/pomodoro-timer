import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

export const SoundComponent = ({ isSound, change }) => (
  <React.Fragment>
    <div>Rest</div>
    <div>
      <Button
        round
        icon={isSound ? "volumeUp" : "volumeOff"}
        onClick={change}
      />
    </div>
  </React.Fragment>
);

SoundComponent.displayName = "Sound";

export default SoundComponent;

SoundComponent.propTypes = {
  isSound: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired
};
