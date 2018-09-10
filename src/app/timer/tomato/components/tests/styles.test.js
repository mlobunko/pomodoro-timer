import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledTomatoComponent } from "../styles";

describe("StyledTomatoComponent", () => {
  it("renders correctly, isWorkingTime true", () => {
    const wrapper = shallow(<StyledTomatoComponent isWorkingTime={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, isWorkingTime true", () => {
    const wrapper = shallow(<StyledTomatoComponent isWorkingTime={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
