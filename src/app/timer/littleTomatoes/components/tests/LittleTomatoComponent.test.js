import React from "react";
import { shallow } from "enzyme";

import { LittleTomatoComponent } from "../LittleTomatoComponent";

const props = {
  isWorkingTime: true,
  numberOfLittleTomatoes: 2,
  order: 2,
  timerOn: true
};

describe("render", () => {
  it("StyledAnimatedLittleTomato", () => {
    const wrapper = shallow(<LittleTomatoComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("StyledLittleTomato", () => {
    const wrapper = shallow(
      <LittleTomatoComponent {...props} numberOfLittleTomatoes={3} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("empty, timerOn false", () => {
    const wrapper = shallow(
      <LittleTomatoComponent {...props} timerOn={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("empty, isWorkingTime false", () => {
    const wrapper = shallow(
      <LittleTomatoComponent {...props} isWorkingTime={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
