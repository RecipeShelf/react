import * as React from "react";
import { Typography } from '@mui/material';

export default ({ minutes }) => (
    <>
        <Typography color="secondary">{minutes} minutes</Typography>
    </>
);