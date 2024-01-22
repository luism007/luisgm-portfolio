import React from "react";
import './Welcome.scss';
import { useScrollTo } from "../../hooks/useScrollTo";
import DownArrowDark from '../../assets/down-arrow-dark.svg';
import { JumpSectionButton } from "../../components/styled-components/jump-to-section-button/JumpSectionButton";
import { ETheme } from "../../constants/enums/ETheme";
export const Welcome = () => {
    const {scrollTo} = useScrollTo('experience', 'smooth', 'start', 'start');
    return(
        <div className="section-container welcome" id = "welcome">
            <div> 
                <h1 className="section-header">
                    Welcome
                </h1>
                <p>
                    Hello, I'm Luis Mejia. I'm a Software Engineer who's based himself
                    in many locations but one thing has remained consistent: my passion for web-development.
                    With 3+ years of industry experience I've worked in teams of leaders within their respective
                    industries: Telecommunications, Vehicle Manufacturing, & Telemedicine.
                </p>
                <JumpSectionButton callback={scrollTo} title='Experience' icon={DownArrowDark} theme = {ETheme.DARK} ></JumpSectionButton>
            </div>
        </div>
    )
}