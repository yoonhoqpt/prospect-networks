import { Typography, Card, Avatar, Box, CardContent, Grid } from '@mui/material';

export default function PostCard({post}){
    var cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        height: '5vw',
        elevation: '0'
    }

    return (
        <Card style={cardStyle}>
            <CardContent>                
                    <Grid container justifyContent='space-between' direction='row'>                        
                        <Grid item xs={1}>
                            <Avatar></Avatar>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                {post.jobTitle}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {post.companyName}
                            </Typography>
                        </Grid>                        
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {post.location}
                            </Typography>
                            <Typography variant="body2">
                                {post.remote} 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {post.salaryMin} - {post.salaryMax}
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