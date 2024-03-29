import "./App.css";
import React from "react";

import VideoPlayer from "../VideoPlayer.jsx";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";
import Attributes from "../components/Attributes";
import Portfolios from "../components/Portfolios";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

const App = (props) => {
  return (
    <div className="App">
      <VideoPlayer />
      <Menu />
      <Home />
      <About />
      <Portfolios />
      <Attributes />
      <Container>
        <Contact />
        <LightColor>
          <Portfolio />
        </LightColor>
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
