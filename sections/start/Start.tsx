import React, {useEffect} from "react";
import './Start.scss';
import LuisHeadshot from '../../assets/luis-headshot.svg';
import LuisTitle from '../../assets/luisgm-title.svg';
import { Welcome } from "../welcome/Welcome";
import { useToggleAnimation } from "../../hooks/useToggleAnimation";


export const Start = () => {
    const { intersectionObserver } = useToggleAnimation('show');

    useEffect(() => {

        const sections = document.querySelectorAll("div[class*='start'], div[class*='welcome']");
        sections.forEach(section => intersectionObserver.observe(section));

        return () => {
            sections.forEach(section => intersectionObserver.unobserve(section));
        }
    });

    return(
        <div className="section-container start hidden" id = "start">
            <div className="parallax-background">
                <img src={LuisHeadshot} className="start-headshot"></img>
                <img src={LuisTitle} className="parallax-foreground" />
            </div>
            <Welcome></Welcome>
        </div>
    )
}