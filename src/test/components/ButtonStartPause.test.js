import React from "react";
import { shallow } from "enzyme";
import { ButtonStartPause } from "../../components/ButtonStartPause";

describe("test ButtonStartPause component", () => {
  it("should render ButtonStartPause component correctly", () => {
    const wrapper = shallow(<ButtonStartPause />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render button pause when timerOn is true", () => {
    const timerOn = true;
    const wrapper = shallow(<ButtonStartPause timerOn={timerOn} />);
    expect(wrapper.find("i").hasClass("fa fa-pause")).toBe(true);
  });

  it("should render button play when timerOn is false", () => {
    const timerOn = false;
    const wrapper = shallow(<ButtonStartPause timerOn={timerOn} />);
    expect(wrapper.find("i").hasClass("fa fa-play")).toBe(true);
  });

  it("should call timerOnToFalse on button click", () => {
    const timerOn = true;
    const timerOnToFalse = jest.fn();
    const wrapper = shallow(
      <ButtonStartPause timerOn={timerOn} timerOnToFalse={timerOnToFalse} />
    );
    wrapper.find("button").simulate("click");
    expect(timerOnToFalse.mock.calls.length).toBe(1);
  });

  it("should call startTimer on button click", () => {
    const timerOn = false;
    const startTimer = jest.fn();
    const wrapper = shallow(
      <ButtonStartPause timerOn={timerOn} startTimer={startTimer} />
    );
    wrapper.find("button").simulate("click");
    expect(startTimer).toHaveBeenCalledTimes(1);
  });
});
