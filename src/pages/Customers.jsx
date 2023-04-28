import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
//icons
import { Autocomplete, Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UserTable from '../components/UserTable';


const Customers = ({ clients }) => {
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
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                height: 60,
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Box sx={{ width: "80%" }}>
                                    <Autocomplete
                                        freeSolo
                                        id="free-solo-2-demo"
                                        size="small"
                                        disableClearable
                                        options={clients.map((client) => client.name)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Search input"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                </Box>
                                <Button variant="contained" color="success">
                                    New User
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    {/* Entries */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <UserTable rows={clients} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Customers