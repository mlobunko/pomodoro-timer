import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledAnimatedLittleTomato,
  StyledLittleTomato,
  StyledLittleTomatoesComponent
} from "../styles";

describe("StyledAnimatedLittleTomato", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledAnimatedLittleTomato />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledLittleTomato", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledLittleTomato />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledLittleTomatoesComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledLittleTomatoesComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
