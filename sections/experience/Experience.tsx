import React, { useEffect } from "react";
import { experience } from "../../data/experience";
import { ExperienceCard } from "../../components/styled-components/experience-card/ExperienceCard";
import { HorizontalScrollList } from "../../components/horizontal-scroll-list/HorizontalScrollList";
import { JumpSectionButton } from "../../components/styled-components/jump-to-section-button/JumpSectionButton";
import { ETheme } from "../../constants/enums/ETheme";
import { useScrollTo } from "../../hooks/useScrollTo";
import './Experience.scss';
import { useToggleAnimation } from "../../hooks/useToggleAnimation";
export const Experience = () => {
    const {scrollTo} = useScrollTo('projects', 'smooth', 'start', 'start');
    const {intersectionObserver} = useToggleAnimation('show', false)
    const expCards = experience.map((exp) => <ExperienceCard experience={exp}/>);
    useEffect(() => {
        
        const horizontalListItems = document.querySelectorAll('.horizontal-list-item');
        horizontalListItems.forEach(item => item.classList.add('hidden'));
        horizontalListItems.forEach(item => intersectionObserver.observe(item));

        return () => {
            horizontalListItems.forEach(item => intersectionObserver.unobserve(item))
        }
    })
    return(
        <div className="section-container experience" id = "experience">
            <h1 className="section-header"> Experience </h1>
            <HorizontalScrollList items={expCards}/>
            <JumpSectionButton title="Projects" theme={ETheme.LIGHT} callback={scrollTo} icon=""></JumpSectionButton>
        </div>
    )
}