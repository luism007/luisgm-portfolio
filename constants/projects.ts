import { ProjectType } from "./types/ProjectType";

export const projects: ProjectType[] = [
    {
        id: 0,
        title: 'Luis • G | M Personal Site',
        media: null,
        description: "This site is also a personal project of mine. I wanted to showcase my knowledge in creating my own Custom Hooks utilized throughout the site, as well leveraging the power of SASS to create custom Mixins that expedited my UI development. Lastly I wanted to demonstrate my ability to create a CI/CD pipeline through Github actions to continuously update my site whenever needed.",
        listItems: ["React", "Typescript", "SASS", "Github Actions CI/CD"],
        externalLink: "https://github.com/luism007/luisgm-portfolio"
    },
    {
        id: 1,
        title: 'Inlimbo Photography Portfolio Site',
        media: null,
        description: "I wanted to create my own custom-site to showcase my photography portfolio. I saw this as a great opportunity to flex my dev-muscles so I decided to code it all myself using React for building the UI, Express to build the backend APIs, & MongoDB to persist my photo collections. My goal was also to remain 3rd party independent as possible when building the UI, therefore more than 90% of the components utilized are completely built by me.",
        listItems: ["React", "Javascript", "Express", "MongoDB", "Docker"],
        externalLink: "https://github.com/luism007/inlimbo"
    },
    {
        id: 1,
        title: 'Arizona COVID-19 Vaccine Finder',
        media: null,
        description: "The pandemic, was a time of uncertainty. Personally, one of the things I was extremely uncertain about was how I could help. After communicating with some users on Reddit we agreed to make a website dedicated to help Arizona residents find available time-slots for the COVID-19 vaccine. My job was to build the UI & all corresponding functionality to help users find available time-slots as quickly as they could. Unfortunately many pharmacies blocked any external users from their APIs to get the information we needed to complete the project. Despite not having real data, I still wanted to showcase the work that was done & the vision that we had to help.",
        listItems: ["Angular", "Typescript", "Express"],
        externalLink: "https://github.com/luism007/Arizona-Covid-19-Vaccine-Finder"
    }
]