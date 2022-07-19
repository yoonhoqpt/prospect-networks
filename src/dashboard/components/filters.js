import {Box, Button, Typography, Grid, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import blackLogo from '../../components/images/blacklogo.png';
import lightTheme from '../../lightTheme';
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
                    <Typography color='secondary'>Location</Typography>
                    <TextField 
                        color='neutral'                          
                        fullWidth
                        id="search"
                        label="Search"
                        name="search"                    
                        focused  
                    />
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Salary</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$0 - $24999" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$25000 - $49999" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$50000 - $74999" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$75000 - $99999" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$100000 - $124999" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$125000 - $149999" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$150000 - $200000" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="$200000 +" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Date posted</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Today" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Yesterday" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="3 days ago" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="1 week ago" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="1 month ago" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="3 months ago" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Experience level</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Entry level (0-1 years of exp)" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Junior (2-3 years of exp)" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Mid-senior (4-5 years of exp)" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Senior (6-7 years of exp)" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="Director (8+ years of exp)" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography color='secondary'>Number of interviews</Typography>
                    <FormGroup>
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="0-1" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="2-3" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="4-5" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="6-9" />
                        <FormControlLabel control={<BpCheckbox color='neutral'/>} label="10+" />
                    </FormGroup>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}