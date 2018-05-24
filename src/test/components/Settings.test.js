import React from "react";
import ReactModal from "react-modal";
import { mount, ReactWrapper, shallow } from "enzyme";
import { Settings } from "../../components/Settings";
import { ContentSettings } from "../../components/ContentSettings";

it("should render modal when isOpen is true", () => {
  const props = {
    isSettingsOpen: true
  };
  // const isSettingsOpen = true;
  const wrapper = mount(<Settings props />);

  // expect(wrapper).toMatchSnapshot();
  wrapper.update();
  expect(wrapper.find(".modal-inside").exists()).toEqual(true);

  // expect(wrapper.find(".modal-inside").exists()).toEqual(true);
});
