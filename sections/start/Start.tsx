import React from "react";
import './Start.scss';
import LuisHeadshot from '../../assets/luis-headshot.svg';
import LuisTitle from '../../assets/luisgm-title.svg';
// import LuisLogo from '../../assets/luisgm-title.png';
import { useScrollTo } from "../../hooks/useScrollTo";
import { JumpSectionButton } from "../../components/styled-components/jump-to-section-button/JumpSectionButton";
import DownArrowLight from '../../assets/down-arrow-light.svg';
import { ETheme } from "../../constants/enums/ETheme";
export const Start = () => {
    const {scrollTo} = useScrollTo('welcome', 'smooth', 'start', 'start');
    return(
        <div className="section-container start" id = "start">
                <img src={LuisHeadshot} className="parallax-background" />
                <img src={LuisTitle} className="parallax-foreground" />
                {/* <img src={LuisLogo} className="parallax-foreground" /> */}
                <JumpSectionButton callback={scrollTo} title="Enter" icon= {DownArrowLight} theme= {ETheme.LIGHT}></JumpSectionButton>
        </div>
    )
}