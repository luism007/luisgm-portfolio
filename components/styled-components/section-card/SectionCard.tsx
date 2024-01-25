import React from "react";

export const SectionCard: React.FC<{header: string, synopsis: string}> = (props) => {
    return(
        <div className={`section-container ${props.header}`}>
            <div>
                <h1 className="section-header">
                    {props.header}
                </h1>
                <p>
                    {props.synopsis}
                </p>
            </div>
        </div>
    )
}