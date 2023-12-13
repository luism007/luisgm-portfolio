import React from "react";
import { experience } from "../../data/experience";
import { ExperienceCard } from "../../components/styled-components/experience-card/ExperienceCard";
import { HorizontalScrollList } from "../../components/horizontal-scroll-list/HorizontalScrollList";
import './Experience.scss';
export const Experience = () => {
    const expCards = experience.map((exp) => <ExperienceCard experience={exp}/>);
    return(
        <div className="section-container" id = "experience">
            <h1> Experience </h1>
            <HorizontalScrollList items={expCards}/>
        </div>
    )
}