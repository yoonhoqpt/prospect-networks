import {Box, Button, Typography, Grid, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import BpCheckbox from './bpcheckbox';
import theme from './theme/filter';

export default function filters(){
    return (        
        <ThemeProvider theme={theme}>        
            <Box>
                <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
                    <Grid item>
                        <Typography>Filters</Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{m: 3}} />
                    </Grid>
                    <Grid item>
                        <Typography color='secondary'>Job Type</Typography>
                        <FormGroup>
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Full time</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Part time</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Internship</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Contract</Typography>} />
                        </FormGroup>
                    </Grid>                            
                    <Grid item>
                        <Typography color='secondary'>Date posted</Typography>
                        <FormGroup>                                          
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">3 days ago</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">1 week ago</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">1 month ago</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">3 months ago</Typography>} />
                        </FormGroup>
                    </Grid>
                    <Grid item>
                        <Typography color='secondary'>Experience level</Typography>
                        <FormGroup>
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Entry level</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Junior</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Mid-senior</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Senior</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">Director</Typography>} />                            
                        </FormGroup>
                    </Grid>
                    <Grid item>
                        <Typography color='secondary'>Number of interviews</Typography>
                        <FormGroup>
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">0-3</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">4-6</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">7-9</Typography>} />
                            <FormControlLabel control={<BpCheckbox color='neutral'/>} 
                            label={<Typography variant='h5' y color="secondary">10+</Typography>} />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>        
    )
}