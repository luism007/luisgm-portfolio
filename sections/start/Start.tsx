import React from "react";
import './Start.scss';
import LuisHeadshot from '../../assets/luis-headshot.svg';
import LuisTitle from '../../assets/luisgm-title.svg';
export const Start = () => {
    return(
        <div className="section-container start" id = "start">
                <img src={LuisHeadshot} className="parallax-background" />
                <img src={LuisTitle} className="parallax-foreground" />
        </div>
    )
}