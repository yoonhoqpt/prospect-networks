import * as React from 'react';
import Slider from '@mui/material/Slider';
import {Button, Grid, TextField, Box, Typography} from '@mui/material';
import theme from '../../components/theme/dashboardSearch';
import { ThemeProvider } from '@emotion/react';
import searchIcon from '../../components/images/searchBlack.png';
import locationIcon from '../../components/images/location.png';
import salaryIcon from '../../components/images/salary.png';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
      <Grid item>
        <img src={searchIcon} height='15' />
      </Grid>
      <Grid item xs={11} sm={4} md={4} lg={4}>
        <Box sx={{mx: 2}}>
          <TextField
              color='secondary'                          
              fullWidth
              id="search"
              label="Job title"
              name="search"                    
              variant="standard"              
          />
        </Box>     
      </Grid>
      <Grid item>
        <img src={locationIcon} height='20' />
      </Grid>
      <Grid item xs={11} sm={3} md={3} lg={3}>
        <Box sx={{mx: 2}}>
          <TextField
              color='secondary'                          
              fullWidth
              id="location"
              label="Location"
              name="location"                    
              variant="standard"                   
          />
        </Box>
      </Grid>
      <Grid item>
        <img src={salaryIcon} height='25' />
      </Grid>
      <Grid item xs={11} sm={3} md={3} lg={3} sx={{my: 1}}>     
        <Box sx={{mx: 2}}>   
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
        </Box>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
        <Button color='neutral' variant='contained'>
            <Typography color='primary'>
                Find jobs
            </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
        <Box sx={{mb: 2}}>
          <Button color='neutral' variant='contained' fullWidth>
              <Typography color='primary'>
                  More filters
              </Typography>
          </Button>
        </Box>
        <Button color='neutral' variant='contained' fullWidth>
            <Typography color='primary'>
                Find jobs
            </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
