import React from "react";
import { connect } from "react-redux";
import { changeIsSound } from "../../actions/settings";

export const ButtonChangeIsSound = ({ changeIsSound, isSound }) => (
  <div onClick={changeIsSound} className="button-plus-minus">
    {isSound ? <i class="fa fa-volume-up" /> : <i class="fa fa-volume-down" />}
  </div>
);

const mapStateToProps = state => ({
  isSound: state.settings.isSound
});

export default connect(mapStateToProps, { changeIsSound })(ButtonChangeIsSound);
