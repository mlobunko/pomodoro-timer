import React from "react";
import { shallow } from "enzyme";
import { ButtonDecreaseTimePeriodBigRest } from "../../../components/SettingsButtons/ButtonDecreaseTimePeriodBigRest";

it("should render ButtonDecreaseTimePeriodBigRest correctly", () => {
  const wrapper = shallow(<ButtonDecreaseTimePeriodBigRest />);
  expect(wrapper).toMatchSnapshot();
});

it("should call decreaseTimePeriodBigRest on a click", () => {
  const decreaseTimePeriodBigRest = jest.fn();
  const wrapper = shallow(
    <ButtonDecreaseTimePeriodBigRest
      decreaseTimePeriodBigRest={decreaseTimePeriodBigRest}
    />
  );
  wrapper.find("button").simulate("click");
  expect(decreaseTimePeriodBigRest).toHaveBeenCalledTimes(1);
});
