import {
  IconCog,
  IconMinus,
  IconPause,
  IconPlay,
  IconPlus,
  IconSync,
  IconVolumeOff,
  IconVolumeUp
} from "./icons";

export const getIcon = iconName => {
  switch (iconName) {
    case "cog":
      return IconCog;
    case "minus":
      return IconMinus;
    case "pause":
      return IconPause;
    case "play":
      return IconPlay;
    case "plus":
      return IconPlus;
    case "sync":
      return IconSync;
    case "volumeOff":
      return IconVolumeOff;
    case "volumeUp":
      return IconVolumeUp;
    default:
      return "OK";
  }
};
