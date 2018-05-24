import React from "react";
import { shallow } from "enzyme";
import { ButtonReset } from "../../components/ButtonReset";

describe("test ButtonReset component", () => {
  it("should render ButtonReset correctly", () => {
    const wrapper = shallow(<ButtonReset />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call resetTimer on button click", () => {
    const resetTimer = jest.fn();
    const wrapper = shallow(<ButtonReset resetTimer={resetTimer} />);
    wrapper.find("button").simulate("click");
    expect(resetTimer.mock.calls.length).toBe(1);
  });
});
