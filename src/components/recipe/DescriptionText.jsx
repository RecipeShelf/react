import * as React from "react";
import { Typography } from '@mui/material';

export default ({ description, sx }) => (
    <>
        <Typography color="text.secondary" sx={sx}>{description}</Typography>
    </>
);