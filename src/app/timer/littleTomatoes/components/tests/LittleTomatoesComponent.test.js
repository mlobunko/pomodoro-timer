import React from "react";
import { shallow } from "enzyme";

import { LittleTomatoesComponent } from "../LittleTomatoesComponent";

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LittleTomatoesComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
