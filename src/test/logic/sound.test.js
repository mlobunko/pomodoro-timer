import { Howl } from "howler";
import alarm from "../../sound/alarm.mp3";

it("should return sound.play() with alarm.mp3", () => {
  const sound = new Howl({
    src: [alarm]
  });
  const play = () => sound.play();

  expect(play()).toEqual(sound.play());
});
