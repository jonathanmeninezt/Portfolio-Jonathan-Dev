import "./App.css";
import React from "react";

import VideoPlayer from "../VideoPlayer.jsx";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";
import Attributes from "../components/Attributes";

const App = (props) => {
  return (
    <div className="App">
      <VideoPlayer />
      <Menu />
      <Home />
      <About />
      <Attributes />
    </div>
  );
};

export default App;
