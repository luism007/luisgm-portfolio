import React from "react"
import './JumpSectionButton.scss';
import { ETheme } from "../../../constants/enums/ETheme";
export const JumpSectionButton: React.FC<{callback: () => void, title: string, icon: string, theme: ETheme }> = (props) => {
    return(
        <div onClick={props.callback} className="jump-to-section-button-container">
            <h3 className= {props.theme}> {props.title} </h3>
            <img src={props.icon}></img>
        </div>
    )
}