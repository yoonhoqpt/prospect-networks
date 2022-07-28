import {Box, Button, Typography, Grid, TextField, Card, CardContent, Avatar} from '@mui/material';
import lightTheme from '../../components/theme/Dashboard';
import { ThemeProvider } from '@emotion/react';
import PostCard from './postCard';

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
                        <PostCard />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{mb: 2}}>
                        <PostCard />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{mb: 2}}>
                        <PostCard />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{mb: 2}}>
                        <PostCard />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>        
    )
}