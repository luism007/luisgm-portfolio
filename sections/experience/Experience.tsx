import React from "react";
import { experience } from "../../data/experience";
import { ExperienceCard } from "../../components/styled-components/experience-card/ExperienceCard";
import { HorizontalScrollList } from "../../components/horizontal-scroll-list/HorizontalScrollList";
import './Experience.scss';
import { JumpSectionButton } from "../../components/styled-components/jump-to-section-button/JumpSectionButton";
import { ETheme } from "../../constants/enums/ETheme";
import { useScrollTo } from "../../hooks/useScrollTo";
export const Experience = () => {
    const {scrollTo} = useScrollTo('projects', 'smooth', 'start', 'start');
    const expCards = experience.map((exp) => <ExperienceCard experience={exp}/>);
    return(
        <div className="section-container experience" id = "experience">
            <h1 className="section-header"> Experience </h1>
            <HorizontalScrollList items={expCards}/>
            {/* <JumpSectionButton title="projects" theme={ETheme.LIGHT} callback={scrollTo} icon=""></JumpSectionButton> */}
        </div>
    )
}