export const msToMinSec = ms => {
  let sec = (ms / 1000).toFixed(0);
  let min = Math.floor(sec / 60);
  min = min < 10 ? `0${min}` : min;
  sec = Math.floor(sec % 60);
  sec = sec < 10 ? `0${sec}` : sec;
  return `${min}:${sec}`;
};
