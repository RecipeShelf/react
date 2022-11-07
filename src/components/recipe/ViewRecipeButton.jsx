import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default ({ recipeId }) => (
    <>
        <Button variant="contained" component={Link} to={'recipe/' + recipeId}>View Recipe</Button>
    </>
);