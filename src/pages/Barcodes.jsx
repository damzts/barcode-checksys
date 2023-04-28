import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
//icons
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Avatar } from '@mui/material';


const Barcodes = ({ clients }) => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[300]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }
            }
        >
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
                <Grid container spacing={3} >
                    {/* User Add */}
                    <Grid item xs={12} >
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: 400,
                            }}
                        >
                            <QrCode2Icon sx={{ width: 300, height: 300 }} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Barcodes