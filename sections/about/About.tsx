import React, { useEffect, useState } from "react";
import './About.scss';
import { HorizontalScrollList } from "../../components/horizontal-scroll-list/HorizontalScrollList";
import { pictures } from "../../constants/pictures";
import { ImgCard } from "../../components/styled-components/img-card/ImgCard";
import { useWindowSize } from "../../hooks/useWindowSize";
export const AboutMe = () => {
    const pics = pictures.map((pic) => <ImgCard img = {pic}></ImgCard>)
    const {getWindowWidth} = useWindowSize();
    const [offset, setOffset] = useState<number | null>(null);

    const updatingOffset = () => {
        const windowSize = getWindowWidth();
        if (windowSize < 800) { 
            setOffset(100);
        } else { 
            setOffset(null);
        }
    }
    window.addEventListener('resize', updatingOffset);

    useEffect(() => {
        updatingOffset();
        return () => { 
            window.removeEventListener('resize', updatingOffset); 
        }
        
    }, [offset])

    return (
        <div className="section-container aboutme" id = "aboutme">
            <div className="aboutme-inner-container">
                <h1 className="section-header"> About Me </h1>
                <HorizontalScrollList items={pics} offset={offset}/>
                <p>
                    When I'm not developing, I'm usually playing tourist w/ friends or
                    enjoying one of too many hobbies: photographing, guitar, soccer, camping,
                    snowboarding, etc. One of my biggest goals for 2024 is to learn how to surf so I can
                    catch the waves this summer, so stay tuned! 
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