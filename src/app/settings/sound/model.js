import { Howl } from "howler";
import alarm from "./sounds/alarm.mp3";

const sound = new Howl({
  src: [alarm]
});

export const play = () => sound.play();
