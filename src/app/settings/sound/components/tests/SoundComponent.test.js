import React from "react";
import { shallow } from "enzyme";

import { SoundComponent } from "../SoundComponent";

const props = {
  change: jest.fn(),
  round: true,
  isSound: true
};

describe("props", () => {
  it("button onClick is 'change'", () => {
    const wrapper = shallow(<SoundComponent {...props} />);
    expect(wrapper.find("[round=true]").prop("onClick")).toEqual(props.change);
  });

  it("button icon is 'volumeUp'", () => {
    const wrapper = shallow(<SoundComponent {...props} />);
    expect(wrapper.find("[round=true]").prop("icon")).toEqual("volumeUp");
  });

  it("button icon is 'volumeOff'", () => {
    const wrapper = shallow(<SoundComponent {...props} isSound={false} />);
    expect(wrapper.find("[round=true]").prop("icon")).toEqual("volumeOff");
  });
});

describe("render", () => {
  it("renders correctly, isSound true", () => {
    const wrapper = shallow(<SoundComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, isSound false", () => {
    const wrapper = shallow(<SoundComponent {...props} isSound={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
