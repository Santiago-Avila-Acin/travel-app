import React, { useContext } from "react";
import { useSelector } from 'react-redux';
import SectionsHeader from "../../components/SectionsHeader/SectionsHeader";
import MyTravels from "../../components/MyTravels/MyTravels";

const Travels = () => {

    return(
        <div className="all_places__main">
            <SectionsHeader
            section="My Travels"/>

            <MyTravels />

        </div>
    );
}

export default Travels;