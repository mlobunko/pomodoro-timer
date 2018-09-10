import React from "react";
import { shallow } from "enzyme";

import { MainComponent } from "../MainComponent";

describe("render", () => {
  it("renders correctly, handle isSettingsOpen is true", () => {
    const wrapper = shallow(<MainComponent isSettingsOpen={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, handle isSettingsOpen is false", () => {
    const wrapper = shallow(<MainComponent isSettingsOpen={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
