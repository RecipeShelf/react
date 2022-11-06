import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SpiceLevel from "./components/SpiceLevelImages";
import ViewRecipeButton from "./components/ViewRecipeButton";

const ComponentList = () => {
    return (
        <Router>
            <h1>Spice Level</h1>
            <dl>
                <dt>Sweet</dt><dd><SpiceLevel level={"Sweet"}></SpiceLevel></dd>
                <dt>Mild</dt><dd><SpiceLevel level={"Mild"}></SpiceLevel></dd>
                <dt>Medium</dt><dd><SpiceLevel level={"Medium"}></SpiceLevel></dd>
                <dt>Hot</dt><dd><SpiceLevel level={"Hot"}></SpiceLevel></dd>
            </dl>
            <hr />
            <h1>View Recipe</h1>
            <ViewRecipeButton recipeId={"123abc"}></ViewRecipeButton>
        </Router>
    )
}

export default ComponentList