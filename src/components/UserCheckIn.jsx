import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Divider, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Title from './Title';

export default function UserCheckIn() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Hoy</Title>
            <Box sx={{ display: "flex", height: "100%", flexDirection: "column", alignItems: "center", p: 1 }}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 156, height: 156 }}
                />
                <Divider sx={{ mt: 2 }} />
                <Box sx={{ display: "flex" }}>
                    <TextField id="outlined-basic" label="ID Number" variant="outlined" />
                    <IconButton color='primary' aria-label="upload" component="label" size='large'>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </React.Fragment>
    );
}