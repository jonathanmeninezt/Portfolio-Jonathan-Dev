import "./Menu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import hit from "../music/sabre.wav";

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => {
    setIsHovered(true);
    playSound();
  };

  const mouseLeave = () => {
    setIsHovered(false);
  };

  const playSound = () => {
    const audio = new Audio(hit);
    audio.play();
  };

  return (
    <React.Fragment>
      <div className="Menu">
        <FontAwesomeIcon icon={faBars} color="white" />
        <nav>
          <ul>
            <li>
              <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">
                Home
              </a>
            </li>
            <li>
              <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">
                Sobre
              </a>
            </li>
            <li>
              <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">
                Habilidades
              </a>
            </li>
            <li>
              <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">
                Portfólio
              </a>
            </li>
            <li>
              <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">
                Eu Faço Sites!
              </a>
            </li>
            <li>
              <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Menu;
