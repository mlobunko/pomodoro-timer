import React from "react";
import { shallow } from "enzyme";

import { MainComponent } from "../MainComponent";

const closeSettings = jest.fn();

describe("props", () => {
  it("button onChange is closeSettings", () => {
    const wrapper = shallow(<MainComponent closeSettings={closeSettings} />);
    expect(wrapper.find("Button").prop("onClick")).toEqual(closeSettings);
  });
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MainComponent closeSettings={closeSettings} />);
    expect(wrapper).toMatchSnapshot();
  });
});
