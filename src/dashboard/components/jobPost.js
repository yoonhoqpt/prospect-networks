import {Box, Button, Typography, Grid, TextField, Card, CardContent, Avatar} from '@mui/material';
import lightTheme from '../../lightTheme';
import { ThemeProvider } from '@emotion/react';

export default function jobPost(){
    var cardStyle = {
        display: 'block',
        width: '37vw',
        transitionDuration: '0.3s',
        height: '5vw',
        elevation: '0'
    }
    return (        
        <ThemeProvider theme={lightTheme}>        
        <Box>
            <Grid container direction="horizontal" justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={12}>
                    <TextField
                        color='secondary'                          
                        fullWidth
                        id="search"
                        label="Search"
                        name="search"                    
                        focused                        
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' fullWidth variant='contained'><Typography color='primary'>Search</Typography></Button>
                </Grid>
                <Grid item>
                    <Card style={cardStyle}>
                        <CardContent>
                            <Grid container justifyContent='space-between' direction='row'>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    Job title
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    Company name
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Location
                                    </Typography>
                                    <Typography variant="body2">
                                    Remote avail                                                        
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Salary
                                    </Typography>
                                    <Typography variant="body2">
                                    benefits                                                    
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                <Card style={cardStyle}>
                        <CardContent>
                            <Grid container justifyContent='space-between' direction='row'>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    Job title
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    Company name
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Location
                                    </Typography>
                                    <Typography variant="body2">
                                    Remote avail                                                        
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Salary
                                    </Typography>
                                    <Typography variant="body2">
                                    benefits                                                    
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                <Card style={cardStyle}>
                        <CardContent>
                            <Grid container justifyContent='space-between' direction='row'>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    Job title
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    Company name
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Location
                                    </Typography>
                                    <Typography variant="body2">
                                    Remote avail                                                        
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Salary
                                    </Typography>
                                    <Typography variant="body2">
                                    benefits                                                    
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                <Card style={cardStyle}>
                        <CardContent>
                            <Grid container justifyContent='space-between' direction='row'>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    Job title
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    Company name
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Location
                                    </Typography>
                                    <Typography variant="body2">
                                    Remote avail                                                        
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Salary
                                    </Typography>
                                    <Typography variant="body2">
                                    benefits                                                    
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}