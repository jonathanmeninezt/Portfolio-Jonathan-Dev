import "./Attributes.css";
import React from "react";

import logoJs from "../image/javascript.svg";
import logoHtml from "../image/html.svg";
import logoCss from "../image/css.svg";
import logoRect from "../image/react.svg";
import gifEstrela from "../assets/fundoestrela.gif";
import jSlogo from "../image/icons8-javascript-100.svg";

const Attributes = (props) => {
  return (
    <div className="Attributes">
      <img className="gifEstrela" src={gifEstrela} />

      <h1>Habilidades</h1>
      <div className="AtributesContainer">
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoJs} />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoHtml} />
            <p>HTML5</p>
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoCss} />
            <p>CSS3</p>
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoRect} />
            <p>React.js</p>
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoRect} />
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoRect} />
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoRect} />
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoRect} />
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoRect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
