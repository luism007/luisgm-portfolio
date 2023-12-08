import React, { useEffect, useState } from "react";
import { Home } from "./pages/home/Home";
import { NavigationBar } from "./components/nav/NavigationBar";

const App = () => {


    return(
        <div>
            <NavigationBar></NavigationBar>
            <Home></Home>
        </div>
    )
}
export default App;