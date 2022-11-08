import * as React from "react";
import { Typography } from '@mui/material';

export default ({ minutes, sx }) => (
    <>
        <Typography color="secondary" sx={sx}>{minutes} minutes</Typography>
    </>
);