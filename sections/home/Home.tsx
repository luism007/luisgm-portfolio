import React from 'react';
import './Home.scss';
import { HorizontalScrollList } from '../../components/horizontal-scroll-list/HorizontalScrollList';
import { experience } from '../../data/experience';
import { ExperienceCard } from '../../components/styled-components/experience-card/ExperienceCard';

export const Home = () => {

const expCards = experience.map((exp) => <ExperienceCard experience={exp}/>)
    return(
        <div className = "home">
            <div className="home-section">
                <HorizontalScrollList items = {expCards}/>
            </div>
        </div>
    )
}