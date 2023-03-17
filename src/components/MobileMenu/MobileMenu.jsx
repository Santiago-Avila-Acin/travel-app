import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MobileMenu.css"

const MobileMenu = () => {
    return (
        
        <div className="mobile__menu__container">
            <ul className="categories">
    
                <h1>MENU</h1>
    
                <li className='home'>
                    <NavLink className="navlink" to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink className="navlink" to="/AllPlaces">Popular Locations</NavLink>
                </li>

                <li>
                    <NavLink className="navlink" to="/AllPlaces">Best Offers</NavLink>
                </li>

                <li>
                    <NavLink className="navlink" to="/AllPlaces">Season packs</NavLink>
                </li>

                <li>
                    <NavLink className="navlink" to="/favorites">favorites</NavLink>
                </li>
            </ul>

            <ul className="account">
                
                <li>
                    <NavLink className="navlink" to="/Travels">My orders</NavLink>
                </li>
                
                <li>
                    <NavLink className="navlink" to="/profile">My account</NavLink>
                </li>
            </ul>
                
        </div>
        );
    }

export default MobileMenu;