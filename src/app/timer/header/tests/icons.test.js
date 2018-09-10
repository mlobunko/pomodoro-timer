import React from "react";
import { shallow } from "enzyme";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { IconInfo } from "../icons";

describe("IconInfo", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconInfo />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is faInfoCircle", () => {
    const wrapper = shallow(<IconInfo />);
    expect(wrapper.prop("icon")).toEqual(faInfoCircle);
  });
});
