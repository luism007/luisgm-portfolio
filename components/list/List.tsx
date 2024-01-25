import React from "react";
import './List.scss';

export const List: React.FC<{items: any[], listDecoration?: string | null}> = (props) => {
    return (
        <ul className="list-container">
            {props.items.map((item, index) => <li key = {index} className="list-item" style={{listStyle: (props.listDecoration !== null) ? props.listDecoration : 'disc' }}>{item}</li>)}
        </ul>
    )
}