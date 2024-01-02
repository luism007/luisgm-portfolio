import React from "react";
import './About.scss';
export const AboutMe = () => {
    return (
        <div className="section-container aboutme" id = "aboutme">
            <div>
                <h1 className="section-header"> About Me </h1>
                <p>
                    When I'm not developing, I'm usually playing tourist w/ friends or
                    enjoying one of too many hobbies: photographing. guitar, soccer, camping,
                    going to conterts, etc. I also really enjoy Star Wars, so if you'd like to chat 
                    about that, don't hesitate to contact me! Wish you the best & thanks for visiting!
                </p>
                <div className = "button-container">
                    <a className="anchor-button" href = "mailto:luisgm.w001@gmail.com" target="_top">
                         contact me
                    </a>
                </div>
            </div>
        </div>
    )
}