import React from "react";
import { shallow } from "enzyme";
import { ButtonIncreaseTimePeriodRest } from "../../../components/SettingsButtons/ButtonIncreaseTimePeriodRest";

it("should render ButtonIncreaseTimePeriodRest", () => {
  const wrapper = shallow(<ButtonIncreaseTimePeriodRest />);
  expect(wrapper).toMatchSnapshot();
});

it("should call increaseTimePeriodRest on a click", () => {
  const increaseTimePeriodRest = jest.fn();
  const wrapper = shallow(
    <ButtonIncreaseTimePeriodRest
      increaseTimePeriodRest={increaseTimePeriodRest}
    />
  );
  wrapper.find("button").simulate("click");
  expect(increaseTimePeriodRest).toHaveBeenCalledTimes(1);
});
