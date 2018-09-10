import React from "react";
import { shallow } from "enzyme";

import { ButtonsComponent } from "../ButtonsComponent";

const props = {
  openSettings: jest.fn(),
  resetTimer: jest.fn()
};

describe("props", () => {
  it("button cog, onClick is 'openSettings'", () => {
    const wrapper = shallow(<ButtonsComponent {...props} />);
    expect(wrapper.find("[icon='cog']").prop("onClick")).toEqual(
      props.openSettings
    );
  });

  it("button sync, onClick is 'resetTimer'", () => {
    const wrapper = shallow(<ButtonsComponent {...props} />);
    expect(wrapper.find("[icon='sync']").prop("onClick")).toEqual(
      props.resetTimer
    );
  });
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ButtonsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
