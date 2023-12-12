import React from "react";
import { Experience } from "../../../constants/types/ExperienceType";
import './ExperienceCard.scss';
export const ExperienceCard: React.FC<{experience: Experience}> = (props) => {
    return(
        <div className = 'container-experience-card' key = {props.experience.id}>
            <h2 className="heading-experience-card"> {props.experience.company}</h2>
            <div className="subheading-experience-card">
                <h3>{props.experience.title}</h3> | <h3>{props.experience.time}</h3>
            </div>
            <p className="description-experience-card"> {props.experience.description}</p>
            <div className="container-button-experience-card">
                <button className="portfolio-button"> View Skills </button>
            </div>
        </div>
    )
}