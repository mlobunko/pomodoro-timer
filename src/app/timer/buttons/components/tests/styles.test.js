import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledButtonsComponent } from "../styles";

describe("StyledButtonsComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledButtonsComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
