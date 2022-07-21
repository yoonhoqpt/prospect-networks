import {Box, Button, Typography, Grid, Avatar} from '@mui/material';
import lightTheme from '../../components/theme/Dashboard';
import { ThemeProvider } from '@emotion/react';

export default function jobDescription(){
    return (        
        <ThemeProvider theme={lightTheme}>        
        <Box>
            <Grid container direction="column" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Avatar></Avatar>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Company name</Typography>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Job title</Typography>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Salary</Typography>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Date posted</Typography>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Experience level</Typography>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Number of interviews</Typography>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}