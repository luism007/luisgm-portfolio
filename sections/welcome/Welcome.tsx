import React from "react";
import './Welcome.scss';
import LuisHeadshot from '../../assets/luis-headshot.svg';
import LuisTitle from '../../assets/luisgm-title.svg';
export const Welcome = () => {
    return(
        <div className="section-container welcome" id = "welcome">
            <div className="welcome-top-section">
                <img src={LuisHeadshot} className="parallax-background" />
                <img src={LuisTitle} className="parallax-foreground" />
            </div>
            <div className="welcome-bottom-section">
                <h1 className="section-header">
                    Welcome
                </h1>
                <p>
                    Hello, I'm Luis Mejia. I'm a Software Engineer who's based himself
                    in many locations but one thing has remained consistent: my passion for web-development.
                    With 3+ years of industry experience I've worked in teams of leaders within their respective
                    industries: Telecommunications, Vehicle Manufacturing, & Telemedicine. Please scroll down to explore more.
                </p>
            </div>
        </div>
    )
}