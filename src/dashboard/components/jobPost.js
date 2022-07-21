import {Box, Button, Typography, Grid, TextField, Card, CardContent, Avatar} from '@mui/material';
import lightTheme from '../../components/theme/Dashboard';
import { ThemeProvider } from '@emotion/react';

export default function jobPost(){
    var cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        height: '5vw',
        elevation: '0'
    }
    return (        
        <ThemeProvider theme={lightTheme}>        
        <Box>
            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">            
                <Grid item>
                    <Box sx={{mb: 2}}>
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
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{mb: 2}}>
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
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{mb: 2}}>
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
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{mb: 2}}>
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
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}