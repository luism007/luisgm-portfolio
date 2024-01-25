import React from "react";
import './Button.scss';
import { ETheme } from "../../constants/enums/ETheme";

export const Button: React.FC<{title: string, callback: () => void, theme: ETheme}> = (props) => {
    return (
        <div className= {`button-container ${props.theme}`} onClick={() => props.callback()}>
            <p className={`button-title ${props.theme}`}> {props.title} </p>
        </div>
    )
}