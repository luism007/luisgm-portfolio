import React, { useEffect } from "react";
import './ParallaxWrapper.scss';

export const ParallaxWrapper = ({children}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className = "parallax-wrapper">
            {children}
        </div>
    )
}