import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledButtons,
  StyledCenterOfPage,
  StyledHeader,
  StyledListOfSettings,
  StyledMainComponent
} from "../styles";

describe("StyledButtons", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledCenterOfPage", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledCenterOfPage />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledHeader", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledListOfSettings", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledListOfSettings />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledMainComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledMainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
