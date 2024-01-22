import React from "react";
import './Start.scss';
import LuisHeadshot from '../../assets/luis-headshot.svg';
import LuisTitle from '../../assets/luisgm-title.svg';
import { useScrollTo } from "../../hooks/useScrollTo";
import { JumpSectionButton } from "../../components/styled-components/jump-to-section-button/JumpSectionButton";
import DownArrowDark from '../../assets/down-arrow-dark.svg';
import { ETheme } from "../../constants/enums/ETheme";
import { Welcome } from "../welcome/Welcome";
export const Start = () => {
    const {scrollTo} = useScrollTo('welcome', 'smooth', 'start', 'start');
    return(
        <div className="section-container start" id = "start">
            <div className="parallax-background">
                <img src={LuisHeadshot} className="start-headshot"></img>
                <img src={LuisTitle} className="parallax-foreground" />
            </div>
            <Welcome></Welcome>
            {/* <JumpSectionButton callback={scrollTo} title="Enter" icon= {DownArrowDark} theme= {ETheme.DARK}></JumpSectionButton> */}
        </div>
    )
}