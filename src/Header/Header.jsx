import React from "react";
import './Header.css';
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import HeaderWidget from "./HeaderWidget/HaderWidget";

const Header = (props) => {
    return(
        <div className="header-container">
            <HeaderMenu />
            {/* <HeaderWidget/> */}
        </div>
    )
}

export default Header;