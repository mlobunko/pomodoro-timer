import React from "react";
import { shallow } from "enzyme";
import { ButtonIncreaseTimePeriodBigRest } from "../../../components/SettingsButtons/ButtonIncreaseTimePeriodBigRest";

it("should render ButtonIncreaseTimePeriodBigRest", () => {
  const wrapper = shallow(<ButtonIncreaseTimePeriodBigRest />);
  expect(wrapper).toMatchSnapshot();
});

it("should call increaseTimePeriodBigRest on a click", () => {
  const increaseTimePeriodBigRest = jest.fn();
  const wrapper = shallow(
    <ButtonIncreaseTimePeriodBigRest
      increaseTimePeriodBigRest={increaseTimePeriodBigRest}
    />
  );
  wrapper.find("button").simulate("click");
  expect(increaseTimePeriodBigRest).toHaveBeenCalledTimes(1);
});
