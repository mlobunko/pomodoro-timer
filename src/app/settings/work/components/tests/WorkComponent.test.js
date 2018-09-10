import React from "react";
import { shallow } from "enzyme";

import { WorkComponent } from "../WorkComponent";
import * as model from "../../../model";
jest.mock("../../../model", () => ({
  displayTime: jest.fn()
}));

beforeEach(() => jest.resetAllMocks());
const props = {
  decreaseTime: jest.fn(),
  increaseTime: jest.fn(),
  time: 25
};

describe("props", () => {
  beforeEach(() => jest.resetAllMocks());

  it("button minus has onClick decreaseTime", () => {
    const wrapper = shallow(<WorkComponent {...props} />);
    expect(wrapper.find("[icon='minus']").prop("onClick")).toEqual(
      props.decreaseTime
    );
  });

  it("button plus has onClick increaseTime", () => {
    const wrapper = shallow(<WorkComponent {...props} />);
    expect(wrapper.find("[icon='plus']").prop("onClick")).toEqual(
      props.increaseTime
    );
  });

  it("button minus prop 'round' is true", () => {
    const wrapper = shallow(<WorkComponent {...props} />);
    expect(wrapper.find("[icon='minus']").prop("round")).toEqual(true);
  });

  it("button plus prop 'round' is true", () => {
    const wrapper = shallow(<WorkComponent {...props} />);
    expect(wrapper.find("[icon='plus']").prop("round")).toEqual(true);
  });

  it("displayTime call with time prop", () => {
    shallow(<WorkComponent {...props} />);
    expect(model.displayTime).toHaveBeenCalledWith(props.time);
  });
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<WorkComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
