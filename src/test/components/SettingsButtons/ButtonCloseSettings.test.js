import React from "react";
import { shallow } from "enzyme";
import { ButtonCloseSettings } from "../../../components/SettingsButtons/ButtonCloseSettings";

it("should render ButtonCloseSettings correctly", () => {
  const wrapper = shallow(<ButtonCloseSettings />);
  expect(wrapper).toMatchSnapshot();
});

it("should call closeSettings on a click", () => {
  const closeSettings = jest.fn();
  const wrapper = shallow(
    <ButtonCloseSettings closeSettings={closeSettings} />
  );
  wrapper.find("button").simulate("click");
  expect(closeSettings).toHaveBeenCalledTimes(1);
});
