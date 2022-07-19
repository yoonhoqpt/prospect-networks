import {Box, Button, Typography, Grid} from '@mui/material';
import blackLogo from '../../components/images/blacklogo.png';
import lightTheme from '../../lightTheme';
import { ThemeProvider } from '@emotion/react';

export default function filters(){
    return (        
        <ThemeProvider theme={lightTheme}>        
        <Box>
            <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                    <Button><Typography color='secondary'>Job Type</Typography></Button>
                </Grid>
                <Grid item>
                    <Button><Typography color='secondary'>Location</Typography></Button>
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