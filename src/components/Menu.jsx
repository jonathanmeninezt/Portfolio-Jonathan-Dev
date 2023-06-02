import "./Menu.css";
import React from "react";

const Menu = (props) => {
  return (
    <div className="Menu">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Portfólio</a>
          </li>
          <li>
            <a href="#">Eu Faço Sites!</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
