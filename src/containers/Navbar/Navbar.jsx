import React from 'react'
import "./Navbar.css"

import Menu__icon from "../../assets/icons/Menu__icon.svg"
import Profile__icon from "../../assets/icons/Profile__icon.svg"
import menu__settings from "../../assets/icons/Settings__icon.svg"
import carousel__photo from "../../assets/images/portada app viajes.jpg"

const Navbar = () => {
    return (
        <>
            <figure className="header__icons__container">
                <img src={Menu__icon} alt="menu__icon"/>
                <img src={Profile__icon} alt="menu__profile_photo"/>
            </figure>

            <nav className="header__navbar__container"> 
                <div className="header__navbar__input">
                    <span className="search__icon"></span>
                    <input type="text" />
                </div>
                <button className="menu__settings">
                    <img src={menu__settings} alt="menu__settings" />
                </button>
            </nav>

            <img src={carousel__photo} alt="photo" className="carousel__photo"></img>
        </>
    );
}

export default Navbar;