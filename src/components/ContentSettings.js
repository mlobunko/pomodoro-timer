import React from "react";
import { connect } from "react-redux";
import ButtonDecreaseTimePeriodWork from "./SettingsButtons/ButtonDecreaseTimePeriodWork";
import ButtonIncreaseTimePeriodWork from "./SettingsButtons/ButtonIncreaseTimePeriodWork";
import ButtonDecreaseTimePeriodRest from "./SettingsButtons/ButtonDecreaseTimePeriodRest";
import ButtonIncreaseTimePeriodRest from "./SettingsButtons/ButtonIncreaseTimePeriodRest";
import ButtonIncreaseTimePeriodBigRest from "./SettingsButtons/ButtonIncreaseTimePeriodBigRest";
import ButtonDecreaseTimePeriodBigRest from "./SettingsButtons/ButtonDecreaseTimePeriodBigRest";
import ButtonChangeIsSound from "./SettingsButtons/ButtonChangeIsSound";
import ButtonCloseSettings from "./SettingsButtons/ButtonCloseSettings";
import { displaySettings } from "../logic/convert";

export const ContentSettings = ({
  timePeriodWork,
  timePeriodRest,
  timePeriodBigRest
}) => (
  <div className="content-settings">
    <div className="header">
      <h1>Settings</h1>
    </div>
    <div className="container">
      <div className="settings-content">
        <div>Work</div>
        <div>
          <ButtonDecreaseTimePeriodWork />
          {displaySettings(timePeriodWork)}
          <ButtonIncreaseTimePeriodWork />
        </div>
        <div>Rest</div>
        <div>
          <ButtonDecreaseTimePeriodRest />
          {displaySettings(timePeriodRest)}
          <ButtonIncreaseTimePeriodRest />
        </div>
        <div>Big rest</div>
        <div>
          <ButtonDecreaseTimePeriodBigRest />
          {displaySettings(timePeriodBigRest)}
          <ButtonIncreaseTimePeriodBigRest />
        </div>
        <div>Sound</div>
        <ButtonChangeIsSound />
      </div>
      <div className="attribute">
        Icons made by Freepik from www.flaticon.com
      </div>
    </div>
    <div className="buttons">
      <div className="button-settings-close">
        <ButtonCloseSettings />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  timePeriodWork: state.settings.timePeriodWork,
  timePeriodRest: state.settings.timePeriodRest,
  timePeriodBigRest: state.settings.timePeriodBigRest
});

export default connect(mapStateToProps)(ContentSettings);
