import React, { useEffect, useState } from "react";
import { Home } from "./sections/home/Home";
import { NavigationBar } from "./components/nav/NavigationBar";
import { Experience } from "./sections/experience/Experience";
import './scss/_foundation.scss';
const App = () => {


    return(
        <div>
            <NavigationBar></NavigationBar>
            {/* <Home></Home> */}
            <Experience></Experience>
        </div>
    )
}
export default App;