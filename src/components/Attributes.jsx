import "./Attributes.css";
import React from "react";
import logoJs from "../image/javascript.svg";

const Attributes = (props) => {
  return (
    <div className="Attributes">
      <h1>Habilidaes</h1>
      <div className="AtributesContainer">
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoJs} />
        </div>
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoJs} />
        </div>
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoJs} />
        </div>
        <div className="AttributesImgJs">
          <img className="logoJs" src={logoJs} />
        </div>
      </div>
    </div>
  );
};

export default Attributes;
