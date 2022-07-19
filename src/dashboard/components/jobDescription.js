import {Box, Button, Typography, Grid, Avatar} from '@mui/material';
import lightTheme from '../../lightTheme';
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
                    <Button><Typography color='secondary'>Company name</Typography></Button>
                </Grid>
                <Grid item>
                    <Button><Typography color='secondary'>Salary</Typography></Button>
                </Grid>
                <Grid item>
                    <Button><Typography color='secondary'>Date posted</Typography></Button>
                </Grid>
                <Grid item>
                    <Button><Typography color='secondary'>Experience level</Typography></Button>
                </Grid>
                <Grid item>
                    <Button><Typography color='secondary'>Number of interviews</Typography></Button>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}