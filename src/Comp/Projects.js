import React from 'react';
import Navbar from './Navbar';
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import project1 from '../assets/2.png';
import project2 from '../assets/3.png';
import project3 from '../assets/1.png';

//Css Styles

const useStyles = makeStyles({
    mainContainer:{
        background: "#1F2833",
        height:"100%"
    },
    cardContainer:{
        maxwidth:345,
        margin:"6rem",
        padding:"2rem auto"
    },
    btn:{
        color:"#66FCF1"
    },
    bodyC:{
        color:"#c5c6c7"
    }
})



const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center" alignItems="center">
            {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                       <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
                         <CardContent>
                             <Typography gutterButton variant="h5">Project 1</Typography>
                             <Typography gutterButton variant="body2" className={classes.bodyC} component="p"> 
                             hjs jhdfjks jhdfskjhsf jhfjsdfhs fjdhfjksfdkf jhfksjfkls jsdhfdkjsdhlorem dkjkds jdhfj
                             </Typography>
                         </CardContent>
                         <CardActions>
                             <Button className = {classes.btn} size="small" color="#66FCF1">Website Link</Button>
                             <Button className = {classes.btn} size="small" color="#66FCF1"> Github Link</Button>
                         </CardActions>                       
                    </CardActionArea>
                </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                       <CardMedia component="img" alt="Project 2" height="140" image={project2}/>
                         <CardContent>
                             <Typography gutterButton variant="h5">Project 2</Typography>
                             <Typography gutterButton variant="body2" className={classes.bodyC} component="p">
                             hjs jhdfjks jhdfskjhsf jhfjsdfhs fjdhfjksfdkf jhfksjfkls jsdhfdkjsdhlorem dkjkds jdhfj
                             </Typography>
                         </CardContent>
                         <CardActions>
                             <Button className = {classes.btn} size="small" >Website Link</Button>
                             <Button className = {classes.btn} size="small" > Github Link</Button>
                         </CardActions>
                       
                    </CardActionArea>
                </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                       <CardMedia component="img" alt="Project 3" height="140" image={project3}/>
                         <CardContent>
                             <Typography gutterButton variant="h5">Project 3</Typography>
                             <Typography gutterButton variant="body2" className={classes.bodyC} component="p">
                             hjs jhdfjks jhdfskjhsf jhfjsdfhs fjdhfjksfdkf jhfksjfkls jsdhfdkjsdhlorem dkjkds jdhfj
                             </Typography>
                         </CardContent>
                         <CardActions>
                             <Button className = {classes.btn} size="small" >Website Link</Button>
                             <Button className = {classes.btn} size="small" > Github Link</Button>
                         </CardActions>
                       
                    </CardActionArea>
                </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                       <CardMedia component="img" alt="Project 4" height="140" image={project3}/>
                         <CardContent>
                             <Typography gutterButton variant="h5">Project 4</Typography>
                             <Typography gutterButton variant="body2" className={classes.bodyC} component="p">
                             hjs jhdfjks jhdfskjhsf jhfjsdfhs fjdhfjksfdkf jhfksjfkls jsdhfdkjsdhlorem dkjkds jdhfj
                             hsf jhfjsdfhs fjdhfjksfdkf jhfksjfkls jsdhfdkjsdhlorem dkjkds jdhfj

                             
                             </Typography>
                         </CardContent>
                         <CardActions>
                             <Button className = {classes.btn} size="small" >Website Link</Button>
                             <Button className = {classes.btn} size="small" > Github Link</Button>
                         </CardActions>
                       
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}

export default About;
