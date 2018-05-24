import React from "react";
import { shallow } from "enzyme";
import { ButtonSettings } from "../../components/ButtonSettings";

describe("test ButtonSettings component", () => {
  it("should render ButtonSettings correctly", () => {
    const wrapper = shallow(<ButtonSettings />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call openSettings on button click", () => {
    const openSettings = jest.fn();
    const wrapper = shallow(<ButtonSettings openSettings={openSettings} />);
    wrapper.find("button").simulate("click");
    expect(openSettings.mock.calls.length).toBe(1);
  });
});
