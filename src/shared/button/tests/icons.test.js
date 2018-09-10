import React from "react";
import { shallow } from "enzyme";

import {
  faCog,
  faMinus,
  faPause,
  faPlay,
  faPlus,
  faSync,
  faVolumeOff,
  faVolumeUp
} from "@fortawesome/free-solid-svg-icons";

import {
  IconCog,
  IconMinus,
  IconPause,
  IconPlay,
  IconPlus,
  IconSync,
  IconVolumeOff,
  IconVolumeUp
} from "../icons";

describe("IconCog", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconCog />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faCog'", () => {
    const wrapper = shallow(<IconCog />);
    expect(wrapper.prop("icon")).toEqual(faCog);
  });
});

describe("IconMinus", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconMinus />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faMinus'", () => {
    const wrapper = shallow(<IconMinus />);
    expect(wrapper.prop("icon")).toEqual(faMinus);
  });
});

describe("IconPause", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconPause />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faPause'", () => {
    const wrapper = shallow(<IconPause />);
    expect(wrapper.prop("icon")).toEqual(faPause);
  });
});

describe("IconPlay", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconPlay />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faPlay'", () => {
    const wrapper = shallow(<IconPlay />);
    expect(wrapper.prop("icon")).toEqual(faPlay);
  });
});

describe("IconPlus", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconPlus />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faPlus'", () => {
    const wrapper = shallow(<IconPlus />);
    expect(wrapper.prop("icon")).toEqual(faPlus);
  });
});

describe("IconSync", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconSync />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faSync'", () => {
    const wrapper = shallow(<IconSync />);
    expect(wrapper.prop("icon")).toEqual(faSync);
  });
});

describe("IconVolumeOff", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconVolumeOff />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faVolumeOff'", () => {
    const wrapper = shallow(<IconVolumeOff />);
    expect(wrapper.prop("icon")).toEqual(faVolumeOff);
  });
});

describe("IconVolumeUp", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<IconVolumeUp />);
    expect(wrapper).toMatchSnapshot();
  });

  it("icon is 'faVolumeUp'", () => {
    const wrapper = shallow(<IconVolumeUp />);
    expect(wrapper.prop("icon")).toEqual(faVolumeUp);
  });
});
