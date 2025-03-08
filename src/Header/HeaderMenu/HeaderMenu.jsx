import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";
export const HeaderMenu = (props) => {
    return(
        <div className="header-menu-container">
            <nav className="header-menu-container_nav-menu">
                <Link to='/main' className="nav-menu_nav-item" id="Glavstr">Главная страница</Link>
                <Link to='/tasks'className="nav-menu_nav-item" id="Spis">Список задач</Link>
            </nav>
        </div>
    )
}