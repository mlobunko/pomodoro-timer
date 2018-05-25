import React from "react";
import { shallow } from "enzyme";
import { ContentSettings } from "../../components/ContentSettings";

describe("test ContentSettings", () => {
  it("should render ContentSettings", () => {
    const wrapper = shallow(<ContentSettings />);
    expect(wrapper).toMatchSnapshot;
  });
});
