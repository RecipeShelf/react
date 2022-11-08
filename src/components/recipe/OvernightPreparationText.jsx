import * as React from "react";
import { Divider, Typography } from '@mui/material';

export default ({ enable }) => {
    if (enable) {
        return <><Divider sx={{ my: 1}}/><Typography color="error">May need overnight preparation</Typography></>;
    }
    else {
        return <></>;
    }
};