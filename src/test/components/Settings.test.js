import React from "react";
import { shallow, mount } from "enzyme";
import { Settings } from "../../components/Settings";
import { CustomProvider } from "./CustomProvider";

it("should render Settings component correctly", () => {
  const wrapper = shallow(<Settings />);
  expect(wrapper).toMatchSnapshot();
});

describe("modal showing", () => {
  it("show modal when isOpen is true", () => {
    const props = {
      isSettingsOpen: true
    };
    const wrapper = mount(
      <CustomProvider>
        <Settings {...props} />
      </CustomProvider>
    );
    expect(wrapper.find(".Modal").exists()).toEqual(true);
    expect(wrapper.find(".content-settings").exists()).toEqual(true);
  });

  it("hide modal when isOpen is false", () => {
    const props = {
      isSettingsOpen: false
    };
    const wrapper = mount(
      <CustomProvider>
        <Settings {...props} />
      </CustomProvider>
    );
    expect(wrapper.find(".Modal").exists()).toEqual(true);
    expect(wrapper.find(".content-settings").exists()).toEqual(false);
  });
});
