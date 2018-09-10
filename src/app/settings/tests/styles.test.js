import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledInput, StyledInputs } from "../styles";

describe("StyledInput", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledInput />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledInputs", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledInputs />);
    expect(wrapper).toMatchSnapshot();
  });
});
