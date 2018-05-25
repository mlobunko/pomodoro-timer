import React from "react";
import { shallow } from "enzyme";
import { ButtonDecreaseTimePeriodRest } from "../../../components/SettingsButtons/ButtonDecreaseTimePeriodRest";

it("should render ButtonDecreaseTimePeriodRest correctly", () => {
  const wrapper = shallow(<ButtonDecreaseTimePeriodRest />);
  expect(wrapper).toMatchSnapshot();
});

it("should call decreaseTimePeriodRest on a click", () => {
  const decreaseTimePeriodRest = jest.fn();
  const wrapper = shallow(
    <ButtonDecreaseTimePeriodRest
      decreaseTimePeriodRest={decreaseTimePeriodRest}
    />
  );
  wrapper.find("button").simulate("click");
  expect(decreaseTimePeriodRest).toHaveBeenCalledTimes(1);
});
