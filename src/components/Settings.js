import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import ContentSettings from "./ContentSettings";
import { closeSettings } from "../actions/statistics";

export const Settings = ({ isSettingsOpen }) => (
  <div>
    <ReactModal
      isOpen={isSettingsOpen}
      onRequestClose={closeSettings}
      contentLabel="Settings"
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      <div className="modal-inside">
        <ContentSettings />
      </div>
    </ReactModal>
  </div>
);

const mapStateToProps = state => ({
  isSettingsOpen: state.statistics.isSettingsOpen
});

export default connect(mapStateToProps, { closeSettings })(Settings);
