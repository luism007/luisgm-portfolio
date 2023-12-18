import React, { useEffect, useState } from "react";
import { Home } from "./sections/home/Home";
import { NavigationBar } from "./components/nav/NavigationBar";
import { Welcome } from "./sections/welcome/Welcome";
import { Experience } from "./sections/experience/Experience";
import { ParallaxWrapper } from "./components/styled-components/parallax-wrapper/ParallaxWrapper";
import './scss/_foundation.scss';
import { Start } from "./sections/start/Start";
const App = () => {


    return(
        <div>
            <ParallaxWrapper>
                <Start></Start>
                <Welcome></Welcome>
                <Experience></Experience>
            </ParallaxWrapper>
        </div>
    )
}
export default App;