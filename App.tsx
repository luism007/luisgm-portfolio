import React, { useEffect, useState } from "react";
import { Home } from "./sections/home/Home";
import { NavigationBar } from "./components/nav/NavigationBar";
import { Welcome } from "./sections/welcome/Welcome";
import { Experience } from "./sections/experience/Experience";
import { ParallaxWrapper } from "./components/styled-components/parallax-wrapper/ParallaxWrapper";
import './scss/_foundation.scss';
import { Start } from "./sections/start/Start";
import { Projects } from "./sections/projects/Projects";
import { AboutMe } from "./sections/about/About";
const App = () => {


    return(
        <div>
            <ParallaxWrapper>
                <Start></Start>
                <Experience></Experience>
                <Projects></Projects>
                <AboutMe></AboutMe>
            </ParallaxWrapper>
        </div>
    )
}
export default App;