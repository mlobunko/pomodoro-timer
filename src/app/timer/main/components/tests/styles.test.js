import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledBackground,
  StyledCenterOfPage,
  StyledFront,
  StyledPage
} from "../styles";

describe("StyledBackground", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledCenterOfPage", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledCenterOfPage />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledFront", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledFront />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledPage", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
