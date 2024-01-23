import React, { useEffect, useState } from "react";
import './About.scss';
import { HorizontalScrollList } from "../../components/horizontal-scroll-list/HorizontalScrollList";
import { pictures } from "../../constants/pictures";
import { ImgCard } from "../../components/styled-components/img-card/ImgCard";
import { useWindowSize } from "../../hooks/useWindowSize";
import { createPortal } from "react-dom";
import { Popup } from "../../components/popup/Popup";
import { Button } from "../../components/button/Button";
import { ETheme } from "../../constants/enums/ETheme";
export const AboutMe = () => {
    const pics = pictures.map((pic) => <ImgCard img = {pic}></ImgCard>)
    const {getWindowWidth} = useWindowSize();
    const [offset, setOffset] = useState<number | null>(null);
    const [popup, setPopup] = useState('hide');

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
        
    }, [offset, popup])

    const togglePopup = () => {
        setPopup((popup === 'show') ? 'hide' : 'show');
    }
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
                    <Button title="Reach Out" callback={togglePopup} theme={ETheme.DARK}></Button>
                    {
                        createPortal(
                            <Popup animateClass={popup} title = {"Socials: "} subtitle = "lets connect" callback={togglePopup}>
                                <div>
                                    <a className="anchor-button" href="mailto:luisgm.w001@gmail.com" target="_top">
                                        contact me
                                    </a>
                                </div>
                            </Popup>, document.body
                        )
                    }
                </div>
            </div>
        </div>
    )
}