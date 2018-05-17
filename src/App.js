import React from "react";
import TimerTime from "./components/TimerTime";
import ButtonStartPause from "./components/ButtonStartPause";
import ButtonReset from "./components/ButtonReset";

const App = () => (
  <div>
    <h1>Pomodoro Clock</h1>
    <span>settings</span>
    <TimerTime />
    <div>tomato</div>
    <div>
      <ButtonStartPause />
      <ButtonReset />
    </div>
  </div>
);

export default App;
