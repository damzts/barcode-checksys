import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Entries from '../components/Entries';
import Meals from '../components/Meals';
import UserCheckIn from '../components/UserCheckIn';

const Dashboard = ({ clients }) => {

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
            }}
        >
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
                <Grid container spacing={3} >
                    {/* User Check In */}
                    <Grid item xs={12} >
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 340,
                            }}
                        >
                            <UserCheckIn />
                        </Paper>
                    </Grid>
                    {/* Recent Entries */}
                    <Grid item xs={10}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Entries rows={clients} />
                        </Paper>
                    </Grid>
                    {/* Daily Meals */}
                    <Grid item xs={2}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 100,
                            }}
                        >
                            <Meals />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}

export default Dashboard
