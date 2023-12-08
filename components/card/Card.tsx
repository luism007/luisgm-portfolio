import React, { useEffect } from "react"
import './Card.scss';
import { CardProps } from "../../constants/types/CardPropType";
export const Card: React.FC<CardProps> = (props) =>{
    return(
        <div key = {props.id} className="card light">
            {props.icon && <span><img src={props.icon} alt="" className="icon" /></span>}
            <h1> {props.title}</h1>
            {(props.subtitles.length > 0) ? props.subtitles.map((subtitle) => <h3> {subtitle}</h3>) : null}
            <p> { props.description }</p>
        </div>
    )
}