import React from "react";
import './List.scss';

export const List: React.FC<{items: any[]}> = (props) => {
    return (
        <ul className="list-container">
            {props.items.map((item, index) => <li key = {index} className="list-item">{item}</li>)}
        </ul>
    )
}