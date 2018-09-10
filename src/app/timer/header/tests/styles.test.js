import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledFontAwesomeIcon } from "../styles";

describe("StyledFontAwesomeIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledFontAwesomeIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
