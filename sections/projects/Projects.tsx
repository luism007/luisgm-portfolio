import React from "react"
import GithubLogo from '../../assets/github-logo.svg';
import './Projects.scss';
import { useWindowNavigate } from "../../hooks/useWindowNavigate";
import { useScrollTo } from "../../hooks/useScrollTo";
import { JumpSectionButton } from "../../components/styled-components/jump-to-section-button/JumpSectionButton";
import DownArrowDark from '../../assets/down-arrow-dark.svg';
import { ETheme } from "../../constants/enums/ETheme";
export const Projects = () => {
    const { navigateTo } = useWindowNavigate();
    const {scrollTo} = useScrollTo('start', 'smooth', 'start', 'start');
    const nav = (url: string) =>{
        navigateTo(url, true);
    }
    return (
        <div className="section-container projects" id = "projects">
            <div>
                <h1 className="section-header"> Projects </h1>
                <p>
                    My journey in web-development started one night in my college dorm
                    when I discovered jQuery & Codeacademy. Since then I've been constantly learning through
                    work or out of my own curiosity. I've opened a new Github to showcase
                    my learning jourey. With over 100+ contributions, I'm still on that
                    journey & I don't plan to stop any time soon.
                </p>
                <img src = {GithubLogo} onClick={() => nav('https://github.com/luism007')}></img>
                <JumpSectionButton callback={scrollTo} title = "About Me" icon= {DownArrowDark} theme = {ETheme.DARK}></JumpSectionButton>
            </div>
        </div>
    )
}