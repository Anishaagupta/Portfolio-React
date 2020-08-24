import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Typography, Box, TextField, Button, Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

// Css Styles
const InputField = withStyles({
   root:{
       "& label.Mui-focused":{
           color:"#66FCF1",
       },
       "& label":{
           color:'#66FCF1'
       },
       "& MuiOutlinedInput-root":{
           "& fieldset":{
               borderColor:"#66FCF1"
           },
           "&:hover fieldset":{
            borderColor:"#66FCF1"
            },
            "&.Mui-focused fieldset":{
                borderColor:"#66FCF1"
            },
            "&.MuiButton-outlined":{
                color:"#66FCF1"
            }
       }
   },
})(TextField)
const useStyles = makeStyles(theme=>({
     form:{
         top:"20%",
         left:"37%",
         transform:"(-50%,-50%)",
         position:"absolute"
     },
     button:{
        //  marginTop:"1rem",
         color:"#66FCF1",
         borderColor:"#66FCF1"
     }
}))
const Contact = () => {
    const classes = useStyles()
    return (
        <Box component="div" style={{background: "#1F2833", height:"100vh "}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                <br/>
                    <Typography variant="h3" color="#66FCF1">
                        Contact Me
                    </Typography>
                    <br/>
                    <br/>
                    <InputField 
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{style:{color:"white"}}}
                    />
                    <br/>
                    <br/>
                    <InputField 
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{style:{color:"white"}}}
                    />
                    <br/>
                    <br/>
                    <InputField 
                        fullWidth={true}
                        label="Contact Number"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{style:{color:"white"}}}
                    />
                    <br/>
                    <br/>
                    <InputField 
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        margin="dense" 
                        size="medium"
                        inputProps={{style:{color:"white"}}}
                    />
                    <Button className={classes.button} fullWidth={true} variant="outlined" endIcon={<SendIcon/>}>Contact Me</Button>
                </Box>
            </Grid>
        </Box>
        
    )
}

export default Contact
