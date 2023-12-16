import React from "react";
import './ParallaxWrapper.scss';

export const ParallaxWrapper = ({children}) => {
    return (
        <div className = "parallax-wrapper">
            {children}
        </div>
    )
}