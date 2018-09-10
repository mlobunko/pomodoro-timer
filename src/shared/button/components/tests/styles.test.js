import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledButton } from "../styles";

describe("StyledButton", () => {
  it("renders correctly with default props", () => {
    const wrapper = shallow(<StyledButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with round prop", () => {
    const wrapper = shallow(<StyledButton round />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with side prop", () => {
    const wrapper = shallow(<StyledButton side />);
    expect(wrapper).toMatchSnapshot();
  });
});
