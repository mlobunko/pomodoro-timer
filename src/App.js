import React from "react";
import Header from "./components/Header";
import TimerTime from "./components/TimerTime";
import Tomatos from "./components/Tomatos";
import ButtonSettings from "./components/ButtonSettings";
import ButtonStartPause from "./components/ButtonStartPause";
import ButtonReset from "./components/ButtonReset";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <div className="bg-image" />
    <div className="main">
      <div className="content">
        <Header />
        <div className="container">
          <TimerTime />
          <Tomatos />
        </div>
        <div className="buttons">
          <ButtonSettings />
          <ButtonStartPause />
          <ButtonReset />
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  </div>
);

export default App;
