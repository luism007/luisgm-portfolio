import React, { useEffect } from "react";
import './ParallaxWrapper.scss';
import { useScrollTo } from '../../../hooks/useScrollTo';
export const ParallaxWrapper = ({children}) => {
    const {scrollToTopOfPage} = useScrollTo();
    useEffect(() => {
        scrollToTopOfPage();
    })
    return (
        <div className = "parallax-wrapper">
            {children}
        </div>
    )
}