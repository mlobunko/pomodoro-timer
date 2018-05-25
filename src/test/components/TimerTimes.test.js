import React from "react";
import { shallow } from "enzyme";
import { TimerTime } from "../../components/TimerTime";

it("should render TimerTime", () => {
  const wrapper = shallow(<TimerTime />);
  expect(wrapper).toMatchSnapshot();
});
