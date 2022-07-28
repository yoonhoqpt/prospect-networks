import {Box, Button, Typography, Grid, TextField, Card, CardContent, Avatar} from '@mui/material';
import lightTheme from '../../components/theme/Dashboard';
import { ThemeProvider } from '@emotion/react';
import PostCard from './postCard';
import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';

const GET_POSTS = gql `
    query GetAllPost {
        getAllPost {
            companyName
            jobTitle
            location
            remote
            salaryMin
            salaryMax
            ExperienceLevel
            interviewNum
            jobDesc
        }
    }
`


export default function JobPost(){
    const {data, loading, error} = useQuery(GET_POSTS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    return (        
        <ThemeProvider theme={lightTheme}>        
            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">            
                    <Grid item>
                        <Box sx={{mb: 2}}>                    
                            {data.getAllPost.map((post) => (
                                <PostCard post={post} />
                            ))}
                        </Box>
                    </Grid>                   
                </Grid>
            </Box>
        </ThemeProvider>        
    )
}