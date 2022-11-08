import * as React from "react";
import { Card, CardContent, CardMedia, Box, CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import NameText from "./NameText";
import DescriptionText from "./DescriptionText";
import SpiceLevelImages from "./SpiceLevelImages";
import TotalTimeText from "./TotalTimeText";
import OvernightPreparationText from "./OvernightPreparationText";
import IngredientCountText from "./IngredientCountText";

export default ({ recipeId, imageId, names, description, spiceLevel, totalTimeInMinutes, requiresOvernightPreparation }) => (
    <>
        <Card sx={{ maxWidth: 350, borderRadius: '6px', boxShadow: 6 }}>
        <CardActionArea component={Link} to={'recipe/' + recipeId}>
            <CardMedia component='img' image={'https://res.cloudinary.com/recipe-shelf/image/upload/w_auto,f_auto,fl_lossy,q_auto,dpr_auto/recipe-images/' + imageId + '.jpg'} />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
                    <NameText names={names}></NameText>
                    <SpiceLevelImages level={spiceLevel} imgWidth={'32px'}></SpiceLevelImages>
                </Box>
                <DescriptionText sx={{ pb: 1}} description={description}></DescriptionText>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
                    <TotalTimeText minutes={totalTimeInMinutes}></TotalTimeText>
                    <IngredientCountText count={5}></IngredientCountText>
                </Box>
                <OvernightPreparationText enable={requiresOvernightPreparation}></OvernightPreparationText>                
            </CardContent>
            </CardActionArea>
        </Card>
    </>
);