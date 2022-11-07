import * as React from "react";
import { Typography, List, ListItem, Tooltip } from '@mui/material';

function getList(names) {
    return <React.Fragment><List>{names.map(i => <ListItem key={i}>{getText(i)}</ListItem>)}</List></React.Fragment>;
}

function getText(name) {
    return <Typography fontStyle="bold" textTransform="uppercase">{name}</Typography>;
}

export default ({names}) => {
        const primaryName = names[0];
        const secondaryNames = names.slice(1);
        if (secondaryNames.length === 0) {
            return <>{getText(primaryName)}</>;
        }
        return <>      
                <Tooltip title={getList(secondaryNames)} describeChild followCursor arrow>
                    {getText(primaryName)}
                </Tooltip>
               </>;
};