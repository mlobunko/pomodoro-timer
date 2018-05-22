import { Howl } from "howler";
import alarm from "../sound/alarm.mp3";

const sound = new Howl({
  src: [alarm]
});
const play = () => sound.play();

export default play;
