import "./Home.css";
import React, { Fragment } from "react";

import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="Home">
        <h2>olá, eu sou o </h2>
        <h1>Jonathan Meninez</h1>
        <p>Desenvolvedor Front-End</p>
        <div className="center">
          <button className="btn">{<FaGithub />}GitHub</button>
          <button className="btn">{<FaLinkedin />} Linkedin</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
