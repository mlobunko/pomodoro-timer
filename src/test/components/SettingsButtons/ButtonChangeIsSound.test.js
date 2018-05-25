import React from "react";
import { shallow } from "enzyme";
import { ButtonChangeIsSound } from "../../../components/SettingsButtons/ButtonChangeIsSound";

it("should render ButtonChangeIsSound correctly", () => {
  const wrapper = shallow(<ButtonChangeIsSound />);
  expect(wrapper).toMatchSnapshot();
});

it("should call changeIsSound on a click", () => {
  const changeIsSound = jest.fn();
  const isSound = true;
  const wrapper = shallow(
    <ButtonChangeIsSound changeIsSound={changeIsSound} isSound={isSound} />
  );
  wrapper.find("div").simulate("click");
  expect(changeIsSound).toHaveBeenCalledTimes(1);
});
