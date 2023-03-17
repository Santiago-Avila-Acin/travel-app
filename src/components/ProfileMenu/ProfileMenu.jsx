import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ProfileMenu.css"

const ProfileMenu = () => {
    return (
        
        <div className="profile__menu__container">
            <ul className="categories">
    
                <h1>PROFILE</h1>
    
                <li>
                    <NavLink className="navlink" to="/Travels">My orders </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/profile"> My account </NavLink>
                </li>
            </ul>

            <ul className="account">
                <li>
                    <NavLink className="navlink" to="/profile">Sing in</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/profile">Sing out</NavLink>
                </li>
            </ul>
        </div>
        );
    }

export default ProfileMenu;