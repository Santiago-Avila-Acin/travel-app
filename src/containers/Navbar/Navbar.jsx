import React from 'react'
import "./Navbar.css"

import carousel__photo from "../../assets/images/portada app viajes.jpg"
import menu__settings from "../../assets/icons/Settings__icon.svg"


const Navbar = () => {
    return (
        <>
            <header>
                <nav className="header__navbar__container"> 
                    <div className="header__navbar__input">
                        <span className="search__icon"></span>
                        <input type="text" />
                    </div>
                    <button className="menu__settings">
                        <img src={menu__settings} alt="menu__settings" />
                    </button>
                </nav>
            </header>

            <img src={carousel__photo} alt="photo" className="carousel__photo"></img>

        </>
    );
}

export default Navbar;