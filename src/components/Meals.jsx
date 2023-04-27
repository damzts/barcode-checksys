import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Title from './Title';

export default function Meals() {
    return (
        <React.Fragment>
            <Title># Comidas</Title>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center" }}>
                <Typography component="p" variant="h4" >
                    150
                </Typography>
            </Box>
        </React.Fragment>
    );
}