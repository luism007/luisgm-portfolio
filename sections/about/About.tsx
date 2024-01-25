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
import { useToggleAnimation } from "../../hooks/useToggleAnimation";
import { contacts } from "../../constants/contacts";
import { ContactCard } from "../../components/styled-components/contact-card/ContactCard";
import { List } from "../../components/list/List";
export const AboutMe = () => {
    const pics = pictures.map((pic) => <ImgCard img = {pic}></ImgCard>)
    const socialLinks = contacts.map((contact) => <ContactCard {...contact}></ContactCard>)
    const {getWindowWidth} = useWindowSize();
    const [offset, setOffset] = useState<number | null>(null);
    const [popup, setPopup] = useState('hide');
    const {intersectionObserver} = useToggleAnimation('show', false);

    const updatingOffset = () => {
        const windowSize = getWindowWidth();
        if (windowSize < 800) { 
            setOffset(100);
        } else { 
            setOffset(null);
        }
    }

    useEffect(() => {
        const sections = document.querySelectorAll(".aboutme-inner-container");
        sections.forEach(section => intersectionObserver.observe(section));
        return () => { 
            sections.forEach(section => intersectionObserver.unobserve(section));
        }
        
    }, [offset, popup])

    const togglePopup = () => {
        setPopup((popup === 'show') ? 'hide' : 'show');
    }
    return (
        <div className="section-container aboutme" id = "aboutme">
            <div className="aboutme-inner-container hidden">
                <h1 className="section-header"> About Me </h1>
                {/* <HorizontalScrollList items={pics} offset={offset}/> */}
                <p className="aboutme-synopsis">
                    When I'm not developing, I'm usually playing tourist w/ friends or
                    enjoying one of too many hobbies: photographing, guitar, soccer, camping,
                    snowboarding, etc. One of my biggest goals for 2024 is to learn how to surf so I can
                    catch the waves this summer, so stay tuned! 
                </p>
                <Button title="Let's Connect" callback={togglePopup} theme={ETheme.BLACK}></Button>

                <Popup animateClass={popup} title={"Socials: "} subtitle="lets connect" callback={togglePopup}>
                    <List items={socialLinks} listDecoration={'none'} />
                </Popup>

            </div>
        </div>
    )
}