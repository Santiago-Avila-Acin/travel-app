import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ButtonBack.css"

import arrow_back from "../../assets/icons/arrow_back.svg"

const ButtonBack = () => {
    const navigate = useNavigate()
    const goYourHomePage = () => {
        navigate("/")
    }

    return (
        <button
        className='button_back'
        onClick={goYourHomePage}>
            <img className='arrow_back' src={arrow_back} alt="arrow_back" />
        </button>
    );
}

export default ButtonBack;