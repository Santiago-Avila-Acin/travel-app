import React, { useState } from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import BestOffers from '../../containers/BestOffers/BestOffers'
import PopularLocation from '../../containers/PopularLocation/PopularLocation'
import SeasonOffers from '../../containers/SeasonOffers/SeasonOffers'
import "./home.css"

const Home = (props) => {
    
    const { PlaceInfo } = props;
    // const [DarkMode, setDarkMode] = useState(false)
    // const handleDarkMode = () => {
    //     setDarkMode(!DarkMode)
    //     document.body.classList.toggle("dark__mode");
    // }
    
    
    //MODO OSCURO (EN PROCESO)

        return (
        <React.Fragment>
            {/* <button 
            onClick={handleDarkMode}
            className={DarkMode ? "dark__mode" : ""}>
                {DarkMode ? "Modo claro" : "Modo oscuro"}
            </button> */}

        <Navbar />

        <PopularLocation
        PlaceInfo={PlaceInfo}
        />

        < BestOffers
        PlaceInfo={PlaceInfo}
        />
        <SeasonOffers
        PlaceInfo={PlaceInfo}
        />

    </React.Fragment>
    );
}

export default Home;