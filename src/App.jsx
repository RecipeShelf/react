import React from "react";
import SpiceLevel from "./components/SpiceLevel";

const App = () =>{
    return (
        <ul>
            <li><SpiceLevel level={"Sweet"}></SpiceLevel></li>
            <li><SpiceLevel level={"Mild"}></SpiceLevel></li>
            <li><SpiceLevel level={"Medium"}></SpiceLevel></li>
            <li><SpiceLevel level={"Hot"}></SpiceLevel></li>
        </ul>        
    )
}

export default App