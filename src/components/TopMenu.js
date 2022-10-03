import React from "react";
import { NavLink } from "react-router-dom";

function TopMenu() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Список задач
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/create">
            Добавить задачу
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
