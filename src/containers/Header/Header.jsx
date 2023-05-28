import React, { useState } from "react";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

import Menu__icon from "../../assets/icons/Menu__icon.svg"
import Profile__icon from "../../assets/icons/Profile__icon.svg"

const Header = () => { 
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [toggleProfileMenu, setToggleProfileMenu] = useState(false);

    const changeToggle = (toggle) => {
		if(toggle === "mobile-menu"){
			setToggleMobileMenu(!toggleMobileMenu);
			setToggleProfileMenu(false);
        } else if (toggle === "profile-menu"){
            setToggleProfileMenu(!toggleProfileMenu);
            setToggleMobileMenu(false);
            };
        };

    return(
        <figure className="header__icons__container">
            <img
            src={Menu__icon}
            alt="menu__icon"
            onClick={() => changeToggle("mobile-menu")}
            />
            {toggleMobileMenu ? <MobileMenu /> : null}

            <img
            src={Profile__icon} alt="menu__profile_photo"
            onClick={() => changeToggle("profile-menu")}
            />
            {toggleProfileMenu ? <ProfileMenu /> : null}
        </figure>
    );
}

export default Header;