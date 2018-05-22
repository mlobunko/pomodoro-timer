//function convert min to ms
export const minToMs = min => min * 60 * 1000;

//function convert ms to mm:ss format
export const msToMmSs = ms => {
  let sec = (ms / 1000).toFixed(0);
  let min = Math.floor(sec / 60);
  min = min < 10 ? `0${min}` : min;
  sec = Math.floor(sec % 60);
  sec = sec < 10 ? `0${sec}` : sec;
  return `${min}:${sec}`;
};

//function to add 0 if less than 10
export const displaySettings = num => {
  if (num < 10) {
    return `0${num}`;
  } else return num;
};
