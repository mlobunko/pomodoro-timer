import React from "react";
import { shallow } from "enzyme";
import { ButtonDecreaseTimePeriodWork } from "../../../components/SettingsButtons/ButtonDecreaseTimePeriodWork";

it("should render ButtonDecreaseTimePeriodWork", () => {
  const wrapper = shallow(<ButtonDecreaseTimePeriodWork />);
  expect(wrapper).toMatchSnapshot();
});

it("should call decreaseTimePeriodWork on a click", () => {
  const decreaseTimePeriodWork = jest.fn();
  const wrapper = shallow(
    <ButtonDecreaseTimePeriodWork
      decreaseTimePeriodWork={decreaseTimePeriodWork}
    />
  );
  wrapper.find("button").simulate("click");
  expect(decreaseTimePeriodWork).toHaveBeenCalledTimes(1);
});
