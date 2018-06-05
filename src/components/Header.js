import React from "react";

const Header = () => (
  <div className="header">
    <h1>
      P<div className="little-tomato" />modoro Timer
    </h1>
    <a
      href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="wiki link on article about Pomodoro Technique"
    >
      <div>
        <i className="fa fa-info-circle" />
      </div>
    </a>
  </div>
);

export default Header;
