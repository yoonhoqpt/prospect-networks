import {Box, Button, Typography, Grid, TextField, Card, CardContent} from '@mui/material';
import lightTheme from '../../lightTheme';
import { ThemeProvider } from '@emotion/react';

export default function jobPost(){
    var cardStyle = {
        display: 'block',
        width: '37vw',
        transitionDuration: '0.3s',
        height: '10vw'
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
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            Be good
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={cardStyle}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            Be good
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={cardStyle}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            Be good
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={cardStyle}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            Be good
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}