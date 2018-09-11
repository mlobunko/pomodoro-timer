import React from "react";
import { shallow } from "enzyme";

import { MainComponent } from "../MainComponent";

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
