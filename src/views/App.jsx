import "./App.css";
import React from "react";

import VideoPlayer from "../VideoPlayer.jsx";
import Menu from "../components/Menu";
import Text from "../components/Text.jsx";

const App = (props) => {
  return (
    <div className="App">
      <VideoPlayer />
      <Menu />
      <Text />
    </div>
  );
};

export default App;
