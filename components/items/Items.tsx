import React from "react";
import { Card } from "../card/Card";
import { experience } from "../../data/experience";


export const Items = () => {
    return experience.map((exp) => (
        <Card key = {exp.id} id={exp.id} icon = {exp.icon} title={exp.company} subtitles={[exp.title, exp.time]} description={exp.description} />
    ))
}