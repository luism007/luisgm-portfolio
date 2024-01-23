import React from "react";
import './ProjectCard.scss';
import { List } from "../../list/List";
import { Button } from "../../button/Button";
import { ETheme } from "../../../constants/enums/ETheme";
import { useWindowNavigate } from "../../../hooks/useWindowNavigate";

export const ProjectCard: React.FC<{title: string, media?: string | null, description: string, externalLink: string, listItems: any[]}> = (props) => {

    const {navigateTo} = useWindowNavigate();
    const nav = (url: string) => {
        navigateTo(url, true);
    }
    const viewInfo = () => {
        console.log('Hi');
    }
    return(
        <div className="project-container-card">
            <h3>{props.title}</h3>
            {props.media ? <img src={props.media}></img> : null }
            <p>{props.description}</p>
            <div className="view-info-container">
                <Button title="View Info" theme= {ETheme.LIGHT} callback={viewInfo}></Button>
            </div>
            <div className="project-info-container">
                <h3> Tech Stack </h3>
                <List items={props.listItems}></List>
                {props?.externalLink ? <Button title = "View Code" callback={() => nav(props.externalLink)} theme= {ETheme.LIGHT}></Button> : null}
            </div>
        </div>
    )
}