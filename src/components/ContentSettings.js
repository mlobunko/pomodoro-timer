import React from "react";
import { connect } from "react-redux";
import {
  increaseTimePeriodWork,
  decreaseTimePeriodWork,
  increaseTimePeriodRest,
  decreaseTimePeriodRest,
  increaseTimePeriodBigRest,
  decreaseTimePeriodBigRest,
  changeIsSound
} from "../actions/settings";
import { displaySettings } from "../logic/convert";
import { closeSettings } from "../actions/statistics";

export const ContentSettings = ({
  timePeriodWork,
  timePeriodRest,
  timePeriodBigRest,
  isSound,
  closeSettings,
  increaseTimePeriodWork,
  decreaseTimePeriodWork,
  increaseTimePeriodRest,
  decreaseTimePeriodRest,
  increaseTimePeriodBigRest,
  decreaseTimePeriodBigRest,
  changeIsSound
}) => (
  <div className="content-settings">
    <div className="header">
      <h1>Settings</h1>
    </div>
    <div className="container">
      <div className="settings-content">
        <div>Work</div>
        <div>
          <button
            onClick={decreaseTimePeriodWork}
            className="button-plus-minus"
          >
            <i class="fa fa-minus" />
          </button>
          {displaySettings(timePeriodWork)}
          <button
            onClick={increaseTimePeriodWork}
            className="button-plus-minus"
          >
            <i class="fa fa-plus" />
          </button>
        </div>
        <div>Rest</div>
        <div>
          <button
            onClick={decreaseTimePeriodRest}
            className="button-plus-minus"
          >
            <i class="fa fa-minus" />
          </button>
          {displaySettings(timePeriodRest)}
          <button
            onClick={increaseTimePeriodRest}
            className="button-plus-minus"
          >
            <i class="fa fa-plus" />
          </button>
        </div>
        <div>Big rest</div>
        <div>
          <button
            onClick={decreaseTimePeriodBigRest}
            className="button-plus-minus"
          >
            <i class="fa fa-minus" />
          </button>
          {displaySettings(timePeriodBigRest)}
          <button
            onClick={increaseTimePeriodBigRest}
            className="button-plus-minus"
          >
            <i class="fa fa-plus" />
          </button>
        </div>
        <div>Sound</div>
        <div onClick={changeIsSound} className="button-plus-minus">
          {isSound ? (
            <i class="fa fa-volume-up" />
          ) : (
            <i class="fa fa-volume-down" />
          )}
        </div>
      </div>
      <div className="attribute">
        Icons made by Freepik from www.flaticon.com
      </div>
    </div>
    <div className="buttons">
      <div className="button-settings-close">
        <button onClick={closeSettings} className="button">
          OK
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  timePeriodWork: state.settings.timePeriodWork,
  timePeriodRest: state.settings.timePeriodRest,
  timePeriodBigRest: state.settings.timePeriodBigRest,
  isSound: state.settings.isSound
});

export default connect(mapStateToProps, {
  closeSettings,
  increaseTimePeriodWork,
  decreaseTimePeriodWork,
  increaseTimePeriodRest,
  decreaseTimePeriodRest,
  increaseTimePeriodBigRest,
  decreaseTimePeriodBigRest,
  changeIsSound
})(ContentSettings);
