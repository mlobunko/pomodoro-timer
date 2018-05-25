import React from "react";
import { shallow } from "enzyme";
import { Settings } from "../../components/Settings";

it("should render Settings modal", () => {
  const wrapper = shallow(<Settings />);
  expect(wrapper).toMatchSnapshot();
});
