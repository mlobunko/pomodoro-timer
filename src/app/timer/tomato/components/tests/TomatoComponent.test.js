import React from "react";
import { shallow } from "enzyme";

import { TomatoComponent } from "../TomatoComponent";

const props = {
  time: 500,
  isWorkingTime: true,
  msToMinSec: jest.fn()
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe("props", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("msToMinSec call with 'time'", () => {
    shallow(<TomatoComponent {...props} />);
    expect(props.msToMinSec).toHaveBeenCalledWith(props.time);
  });

  it("check isWorkingTime true", () => {
    const wrapper = shallow(<TomatoComponent {...props} />);
    expect(wrapper.find("StyledTomatoComponent").prop("isWorkingTime")).toEqual(
      true
    );
  });

  it("check isWorkingTime false", () => {
    const wrapper = shallow(
      <TomatoComponent {...props} isWorkingTime={false} />
    );
    expect(wrapper.find("StyledTomatoComponent").prop("isWorkingTime")).toEqual(
      false
    );
  });
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<TomatoComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
