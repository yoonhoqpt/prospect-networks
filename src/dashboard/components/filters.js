import {Box, Button, Typography, Grid, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import blackLogo from '../../components/images/blacklogo.png';
import lightTheme from '../../components/theme/Dashboard';
import { ThemeProvider } from '@emotion/react';
import BpCheckbox from './bpcheckbox';

export default function filters(){
    return (        
        <ThemeProvider theme={lightTheme}>        
        <Box>
            <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                    <Typography>Filters</Typography>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Job Type</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Full time" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Part time" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Internship" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Contract" />
                    </FormGroup>
                </Grid>                            
                <Grid item>
                    <Typography color='secondary'>Date posted</Typography>
                    <FormGroup>                                          
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="3 days ago" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="1 week ago" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="1 month ago" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="3 months ago" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Experience level</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Entry level" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Junior" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Mid-senior" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Senior" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Director" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Number of interviews</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="0-3" />                        
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="4-6" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="7-9" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="10+" />
                    </FormGroup>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}