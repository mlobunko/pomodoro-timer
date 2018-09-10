import React from "react";
import { shallow } from "enzyme";

import { CenterButtonComponent } from "../CenterButtonComponent";

const props = {
  pauseTimer: jest.fn(),
  startTimer: jest.fn(),
  timerOn: true
};

describe("props", () => {
  describe("timerOn true", () => {
    it("button pause onClick is 'pauseTimer'", () => {
      const wrapper = shallow(<CenterButtonComponent {...props} />);
      expect(wrapper.find("[icon='pause']").prop("onClick")).toEqual(
        props.pauseTimer
      );
    });
  });

  describe("timerOn false", () => {
    it("button play onClick is 'startTimer'", () => {
      const wrapper = shallow(
        <CenterButtonComponent {...props} timerOn={false} />
      );
      expect(wrapper.find("[icon='play']").prop("onClick")).toEqual(
        props.startTimer
      );
    });
  });
});

describe("render", () => {
  it("renders correctly, timerOn true", () => {
    const wrapper = shallow(<CenterButtonComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, timerOn false", () => {
    const wrapper = shallow(
      <CenterButtonComponent {...props} timerOn={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
