import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {Button, Grid, TextField, Typography} from '@mui/material'

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="horizontal" justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={4}>
                    <TextField
                        color='secondary'                          
                        fullWidth
                        id="search"
                        label="Search"
                        name="search"                    
                        focused                        
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        color='secondary'                          
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"                    
                        focused                        
                    />
                </Grid>
    <Grid item xs={3}>
        
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color='neutral'
        min={0}
        step={1000}
        max={300000}
      />
      
    </Grid>
    <Grid item xs={1}>
        <Button color='neutral' variant='contained'>
            <Typography color='primary'>
                Find jobs
            </Typography>
        </Button>
    </Grid>
    </Grid>
  );
}
