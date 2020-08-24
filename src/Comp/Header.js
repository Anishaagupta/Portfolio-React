import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import avatar from '../assets/1.png';
import Typed from 'react-typed';


//Css Style
const useStyles = makeStyles(theme => ({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(15)
    },
    title:{
        color: "#66FCF1"
    },
    subtitle:{
        color: "#45A29E",
        marginBottom: "3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        textAlign: "center",
        zIndex: 1
    }
}))

function Header() {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
        <Grid container justify="center"></Grid>
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
            <Typography className={classes.title} variant="h3">
            <Typed
                    strings={['Anisha Gupta']}
                    typeSpeed={20}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h4"> 
            <Typed
                strings={[
                    'Web Developer',
                    'Front End Web Developer',
                    'Full Stack Web Developer',
                    'MERN Stack Ddeveloper'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    // attr="placeholder"
                    loop/>
                    
                </Typography>
               
        </Box>
    )
}

export default Header;
