import React from "react";
import './ContactCard.scss';

export const ContactCard: React.FC<{iconUrl: string, externalLink: string, title: string, target?: string}> = (props) => {
    return (
        <div className="container-contact-card">
            <div className="contact-card-icon-container">
                <img src={props.iconUrl} className="contact-card-icon"></img>
            </div>
            <div>
                <a className="contact-card-anchor" href={props.externalLink} target = {props?.target}> {props.title}</a>
            </div>
        </div>
    )
}