import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./MyTravelsCard.css"

import location__icon from "../../assets/icons/location__icon.svg"
import Profile__icon from "../../assets/icons/Profile__icon.svg"

const MyTravelsCard = (props) => {
    const totalPeople = props.people + props.child
    const navigate = useNavigate();

    const goYourTravel = () => {
        navigate(`/my-travels/${props.slug}`)
    }

    return (
    <div onClick={goYourTravel}  className="single_place__card" >
        <img className="single_place__card__image" src={props.placeImage} alt="place image" />
        <div className="single_place__card__info">
            <h2>{props.placeName}</h2>
            <div className="single_place__card__info--place">
                <img className="single_place__card__location__icon" src={location__icon} alt="location logo" />
                <p className="single_place__card__place_name">
                    {props.location}
                </p>
            </div>
                <div className="single_place__card__people_and_date__container">
                    {totalPeople > 1 ? (
                        <>
                            <div className="single_place__card__date">
                                <h3>Date:</h3>
                                <p>{props.date}</p>
                            </div>
                            <div className="single_place__card__people">
                                <img src={Profile__icon} alt="" />
                                <p>{totalPeople}</p>
                            </div>
                        </>
                    ) : null}
                </div>
        </div>
    </div>
    );
}

export default MyTravelsCard;



