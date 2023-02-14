import React from 'react';
import "./MobileMenu.css"

const MobileMenu = () => {
    return (
        
        <div className="mobile__menu__container">
            <ul className="categories">
    
                <h1>MENU</h1>
    
                <li>
                    {/* <a href="/">All</a> */}
                </li>

                <li>

                </li>

            </ul>

            <ul className="account">
                
                <li>
                    <a href="/orders">My orders</a>
                </li>
    
                
                <li>
                    <a href="/account">My account</a>
                </li>
    
            </ul>
                
        </div>
        );
    }

export default MobileMenu;