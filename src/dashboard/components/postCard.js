import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { Typography, Card, Avatar, CardContent, Grid } from '@mui/material';

const GET_CARD = gql `
    query Post {
        getPost(companyName: "Prospect") {
            companyName
            jobTitle
            location
            remote
            salaryMin
            salaryMax
            ExperienceLevel
            jobDesc
            interviewNum
        }
    }
`

export default function PostCard(){
    var cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        height: '5vw',
        elevation: '0'
    }

    const {loading, error, data} = useQuery(GET_CARD);
    if(loading) return 'loading...';
    if(error) return `Error! ${error.message}`;
    return (
        <Card style={cardStyle}>
            <CardContent>
                <Grid container justifyContent='space-between' direction='row'>
                    <Grid item>
                        <Avatar></Avatar>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                            {data.getPost.jobTitle}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {data.getPost.companyName}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.getPost.location}
                        </Typography>
                        <Typography variant="body2">
                            {data.getPost.remote} 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.getPost.salaryMin} - {data.getPost.salaryMax}
                        </Typography>
                        <Typography variant="body2">
                            Per Year                                    
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}