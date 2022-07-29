import { Typography, Card, Avatar, Box, CardContent, Grid } from '@mui/material';

export default function PostCard({post}){
    var cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        height: '5vw',
        elevation: '0'
    }

    var cardMobileStyle ={
        display: 'block',
        height: '20',
        elevation: '0'
    }

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                <Card style={cardStyle}>
                    <CardContent>                
                        <Grid container justifyContent='space-between' direction='row'>                        
                            <Grid item xs={1}>
                                <Avatar></Avatar>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    <b>{post.jobTitle}</b>
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    {post.companyName}
                                </Typography>
                            </Grid>                        
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    <b>{post.location}</b>
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    {post.remote} 
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    <b>{post.salaryMin} - {post.salaryMax}</b>
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                    Per Year                                    
                                </Typography>
                            </Grid>
                        </Grid>                
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
                <Card style={cardMobileStyle}>
                    <CardContent>                
                        <Grid container direction='column'>
                            <Grid container justifyContent='flex-start' direction='row'>                        
                                <Grid item xs={3}>
                                    <Avatar sx={{ width: 60, height: 60 }}/>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography sx={{ fontSize: 20 }} color="secondary" gutterBottom>
                                        {post.companyName}
                                    </Typography>
                                    <Typography sx={{ fontSize: 15 }} color="secondary" gutterBottom>
                                        <b>{post.jobTitle}</b>
                                    </Typography>                                    
                                </Grid>                        
                            </Grid>
                            <Grid container justifyContent='space-between' direction='row'>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                        <b>{post.location}</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                        {post.remote} 
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='space-between' direction='row'>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                        <b>{post.salaryMin} - {post.salaryMax}</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                                        Per Year                                    
                                    </Typography>
                                </Grid>
                            </Grid>               
                        </Grid> 
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}