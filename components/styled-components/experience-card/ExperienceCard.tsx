import React, { useEffect, useState } from "react";
import { Experience } from "../../../constants/types/ExperienceType";
import './ExperienceCard.scss';
import { Popup } from "../../popup/Popup";
export const ExperienceCard: React.FC<{experience: Experience}> = (props) => {
    
    const [popup, setPopup] = useState('hide');
    
    useEffect(() => {}, [popup]);
    
    const togglePopup = () => {
        setPopup((popup === 'show') ? 'hide' : 'show');
    }
    
    return(
        <div className = 'container-experience-card' key = {props.experience.id}>
            <h2 className="heading-experience-card"> {props.experience.company}</h2>
            <div className="subheading-experience-card">
                <h3 className="position-experience-card">{props.experience.title}</h3> <h3> | </h3><h3 className="tenure-experience-card">{props.experience.time}</h3>
            </div>
            <p className="description-experience-card"> {props.experience.description}</p>
            <div className="container-button-experience-card">
                <button className="portfolio-button" onClick={togglePopup}> View Skills </button>
            </div>
            <Popup animateClass = {popup} title = {props.experience.company} subtitle="skills" callback={togglePopup}>
                    {<div> {props.experience.description}</div>}
            </Popup>
        </div>
    )
}