import React from "react";
import { shallow } from "enzyme";

import * as model from "../../model";
jest.mock("../../model", () => ({
  getIcon: jest.fn()
}));
import { ButtonComponent } from "../ButtonComponent";

beforeEach(() => jest.resetAllMocks());

const onClick = jest.fn();
const icon = "a";

describe("props", () => {
  beforeEach(() => jest.resetAllMocks());

  it("round", () => {
    const round = true;
    const wrapper = shallow(<ButtonComponent round={round} icon={icon} />);
    expect(wrapper.prop("round")).toEqual(true);
  });

  it("side", () => {
    const side = true;
    const wrapper = shallow(<ButtonComponent side={side} icon={icon} />);
    expect(wrapper.prop("side")).toEqual(true);
  });

  it("onClick", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ButtonComponent onClick={onClick} icon={icon} />);
    expect(wrapper.prop("onClick")).toEqual(onClick);
  });

  it("icon", () => {
    shallow(<ButtonComponent icon={icon} />);
    expect(model.getIcon).toHaveBeenCalledWith(icon);
  });
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ButtonComponent icon={icon} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });
});
