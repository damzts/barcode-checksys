import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Entries from '../components/Entries';

const Reports = ({ clients }) => {
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
                <Grid container spacing={3}>
                    {/* Entries */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Entries rows={clients} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Reports