import React from "react";
import { shallow } from "enzyme";

import { HeaderComponent } from "../HeaderComponent";

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
