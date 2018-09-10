import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledHeader, StyledInfo, StyledTomatoIcon } from "../styles";

describe("StyledHeader", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledInfo", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledTomatoIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledTomatoIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
