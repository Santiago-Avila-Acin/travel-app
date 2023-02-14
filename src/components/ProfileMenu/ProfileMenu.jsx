import React from 'react';
import "./ProfileMenu.css"

const ProfileMenu = () => {
    return (
        
        <div className="profile__menu__container">
            <ul className="categories">
    
                <h1>PROFILE</h1>
    
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

export default ProfileMenu;