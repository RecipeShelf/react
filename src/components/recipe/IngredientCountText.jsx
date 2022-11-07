import * as React from "react";
import { Typography } from '@mui/material';

export default ({ count }) => (
    <>
        <Typography fontStyle="italic" color="primary">{count} ingredients</Typography>
    </>
);