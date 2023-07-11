import "./App.css";
import React from "react";

import VideoPlayer from "../VideoPlayer.jsx";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";
import Attributes from "../components/Attributes";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const App = (props) => {
  return (
    <div className="App">
      <VideoPlayer />
      <Menu />
      <Home />
      <About />
      <Portfolios />
      <Attributes />

      <Contact />
    </div>
  );
};

export default App;
