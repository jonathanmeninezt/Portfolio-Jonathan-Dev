import "./Attributes.css";
import React from "react";
import logoJs from "../image/javascript.svg";
import logoHtml from "../image/html.svg";
import logoCss from "../image/css.svg";
import logoRect from "../image/react.svg";

const Attributes = (props) => {
  return (
    <div className="Attributes">
      <h1>Habilidaes</h1>
      <div className="AtributesContainer">
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoJs} />
        </div>
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoHtml} />
        </div>
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoCss} />
        </div>
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoRect} />
        </div>
      </div>
    </div>
  );
};

export default Attributes;
