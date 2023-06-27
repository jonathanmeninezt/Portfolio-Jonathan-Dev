import "./Attributes.css";
import React from "react";

import logoJs from "../image/javascript.svg";
import logoHtml from "../image/html.svg";
import logoCss from "../image/css.svg";
import logoRect from "../image/react.svg";
import gifEstrela from "../assets/fundoestrela.gif";

const Attributes = (props) => {
  return (
    <div className="Attributes">
      <img className="gifEstrela" src={gifEstrela} />

      <h1>Habilidades</h1>
      <div className="AtributesContainer">
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoJs} />
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoHtml} />
          </div>
        </div>
        <div className="AttributesImgJs">
          <div className="content">
            <img className="logoJs" src={logoCss} />
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
