import React from "react";
import PropTypes from "prop-types";

import Button from "shared/button/components";

import Work from "../../work/components";
import Rest from "../../rest/components";
import BigRest from "../../bigRest/components";
import Sound from "../../sound/components";

import {
  StyledButtons,
  StyledCenterOfPage,
  StyledHeader,
  StyledListOfSettings,
  StyledMainComponent
} from "./styles";

export const MainComponent = ({ closeSettings }) => (
  <StyledMainComponent>
    <StyledHeader>Settings</StyledHeader>
    <StyledCenterOfPage>
      <StyledListOfSettings>
        <Work />
        <Rest />
        <BigRest />
        <Sound />
      </StyledListOfSettings>
    </StyledCenterOfPage>
    <StyledButtons>
      <Button onClick={closeSettings} />
    </StyledButtons>
  </StyledMainComponent>
);

export default MainComponent;

MainComponent.displayName = "SettingsMain";

MainComponent.propTypes = {
  closeSettings: PropTypes.func.isRequired
};
