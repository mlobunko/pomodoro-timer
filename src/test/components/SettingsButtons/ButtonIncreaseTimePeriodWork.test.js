import React from "react";
import { shallow } from "enzyme";
import { ButtonIncreaseTimePeriodWork } from "../../../components/SettingsButtons/ButtonIncreaseTimePeriodWork";

it("should render ButtonIncreaseTimePeriodWork", () => {
  const wrapper = shallow(<ButtonIncreaseTimePeriodWork />);
  expect(wrapper).toMatchSnapshot();
});

it("should call increaseTimePeriodWork on a click", () => {
  const increaseTimePeriodWork = jest.fn();
  const wrapper = shallow(
    <ButtonIncreaseTimePeriodWork
      increaseTimePeriodWork={increaseTimePeriodWork}
    />
  );
  wrapper.find("button").simulate("click");
  expect(increaseTimePeriodWork).toHaveBeenCalledTimes(1);
});
