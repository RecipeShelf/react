import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IngredientCount from "./components/recipe/IngredientCountText";
import NameText from "./components/recipe/NameText";
import OvernightPreparationText from "./components/recipe/OvernightPreparationText";
import SpiceLevel from "./components/recipe/SpiceLevelImages";
import TotalTimeText from "./components/recipe/TotalTimeText";
import ViewRecipeButton from "./components/recipe/ViewRecipeButton";

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
            <hr />
            <h1>Ingredient Count</h1>
            <IngredientCount count={5}></IngredientCount>
            <hr />
            <h1>Overnight Preparation</h1>
            <OvernightPreparationText></OvernightPreparationText>
            <hr />
            <h1>Total time</h1>
            <TotalTimeText minutes={30}></TotalTimeText>
            <hr />
            <h1>Name</h1>
            <NameText names={["Aloo Gobi", "Potato cauliflower"]}></NameText>
            <NameText names={["Spinach feta roll"]}></NameText>
        </Router>
    )
}

export default ComponentList