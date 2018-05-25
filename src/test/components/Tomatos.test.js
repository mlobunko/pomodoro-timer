import React from "react";
import { shallow } from "enzyme";
import { Tomatos } from "../../components/Tomatos";

it("should render Tomatos", () => {
  const wrapper = shallow(<Tomatos />);
  expect(wrapper).toMatchSnapshot();
});
