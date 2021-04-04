import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Carrito ({props.cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
