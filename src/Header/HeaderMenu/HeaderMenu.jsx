import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";
export const HeaderMenu = (props) => {
    return(
        <div className="header-menu-container">
            <nav className="header-menu-container_nav-menu">
                <Link to='/main' className="nav-menu_nav-item">Главная страница</Link>
                <Link to='/tasks'className="nav-menu_nav-item">Список задач</Link>
            </nav>
        </div>
    )
}