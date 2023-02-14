import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../main.css"
import "./Footer.css"

import home__icon from "../../assets/icons/home__icon.svg"
import travel__icon from "../../assets/icons/travel__icon.svg"
import favorite__icon from "../../assets/icons/favorite__icon.svg"
import Profile__icon__footer from "../../assets/icons/Profile__icon__footer.svg"

const Footer = () => {
    return (
        <div className="footer__container">

            <NavLink
                style={({ isActive }) => (
                {backgroundColor: isActive ? "var(--primary_color)" : "" ,
                borderRadius: "20%",})}
                to="/"
            >
                <div className="footer__home__icon">
                        <img src={home__icon} alt="home__icon" />
                </div>
            </NavLink>

            <NavLink
                style={({ isActive }) => (
                {backgroundColor: isActive ? "var(--primary_color)" : "" ,
                borderRadius: "20%",})}
                to="/Travels"
            >
                <div className="footer__travel__icon">
                    <img src={travel__icon} alt="travel__icon" />
                </div>
            </NavLink>

            <NavLink
                style={({ isActive }) => (
                {backgroundColor: isActive ? "var(--primary_color)" : "" ,
                borderRadius: "20%",})}
                to="/Favorites"
            >
                <div className="footer__favorite__icon">
                    <img src={favorite__icon} alt="favorite__icon" />
                </div>
            </NavLink>

            <NavLink
                style={({ isActive }) => (
                {backgroundColor: isActive ? "var(--primary_color)" : "" ,
                borderRadius: "20%",})}
                to="/Profile"
            >
                <div className="footer__profile__icon">
                    <img src={Profile__icon__footer} alt="profile__icon" />
                </div>
            </NavLink>
        </div>
    );
}

export default Footer; 