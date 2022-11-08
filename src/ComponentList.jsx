import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IngredientCount from "./components/recipe/IngredientCountText";
import NameText from "./components/recipe/NameText";
import OvernightPreparationText from "./components/recipe/OvernightPreparationText";
import SpiceLevel from "./components/recipe/SpiceLevelImages";
import TotalTimeText from "./components/recipe/TotalTimeText";
import DescriptionText from "./components/recipe/DescriptionText";
import RecipeCard from "./components/recipe/RecipeCard";

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
            <h1>Ingredient Count</h1>
            <IngredientCount count={5}></IngredientCount>
            <hr />
            <h1>Overnight Preparation</h1>
            <OvernightPreparationText enable></OvernightPreparationText>
            <hr />
            <h1>Total time</h1>
            <TotalTimeText minutes={30}></TotalTimeText>
            <hr />
            <h1>Name</h1>
            <NameText names={["Aloo Gobi", "Potato cauliflower"]}></NameText>
            <br />
            <NameText names={["Spinach feta roll"]}></NameText>
            <hr />
            <h1>Description</h1>
            <DescriptionText description={"Some tasty dish, probably"}></DescriptionText>
            <hr />
            <h1>Card</h1>
            <RecipeCard recipeId={"123abc"} imageId={"21BJPfH4"} names={["Eggplant Zucchini wraps with maple syrup", "A moroccan dish"]} spiceLevel={"Medium"} description={"A long description of the dish, some of it makes sense and some doesn't"} totalTimeInMinutes={45} requiresOvernightPreparation={true}></RecipeCard>
        </Router>
    )
}

export default ComponentList