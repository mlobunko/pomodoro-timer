import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledGlobal } from "../styles";

describe("StyledGlobal", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledGlobal />);
    expect(wrapper).toMatchSnapshot();
  });
});
