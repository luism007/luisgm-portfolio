import React from "react";
import './ProjectCard.scss';
import { List } from "../../list/List";

export const ProjectCard: React.FC<{title: string, media?: string | null, description: string, externalLink: string, listItems: any[]}> = (props) => {
    return(
        <div className="project-container-card">
            <h3>{props.title}</h3>
            {props.media ? <img src={props.media}></img> : null }
            <p>{props.description}</p>
            <h3> Tech Stack </h3>
            <List items={props.listItems}></List>
            {props?.externalLink ? <p>{props.externalLink}</p> : null}
        </div>
    )
}