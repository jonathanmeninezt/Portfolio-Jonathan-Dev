import "./App.css";
import React from "react";

import VideoPlayer from "../VideoPlayer.jsx";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";

const App = (props) => {
  return (
    <div className="App">
      <VideoPlayer />
      <Menu />
      <Home />
      <About />
    </div>
  );
};

export default App;
