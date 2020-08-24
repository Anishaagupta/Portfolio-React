import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography,  Box} from '@material-ui/core';
import Navbar from './Navbar';

//Css Styles

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background:"#1F2833"
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
    
        "&:before":{
           content:"''",
           height:"100%",
           position:"absolute",
           border:"1px solid white",
           right:"40px",
           top:0,
   
        },
       "&:after":{
        content:"''",
        display:"table",
        clear:"both"
       },
       [theme.breakpoints.up("md")]:{
        padding:"2rem",
        "&:before":{
            left:"calc(50% - 1px)",
            right:"auto"
        }
    }
    },
    timeLineItem:{
       padding:"1rem",
       borderBottom:"2px solid #0b0c10",
       position:"relative",
       margin:"1rem 3rem 1rem 1rem",
       clear:"both",
       "&:after":{
           content:"''",
           position:"absolute"
       },
       "&:before":{
           content:"''",
           position:"absolute",
           right:"-0.625rem",
           top:"calc(50% - 1px)",
           borderStyle:"solid",
           borderColor:" #66FCF1",
           borderWidth:"0.625rem",
           transform:"rotate(45deg)"
       },
       [theme.breakpoints.up("md")]:{
           width:" 44%",
           margin:"1rem",
           "&:nth-of-type(2n)":{
               float:"right",
               margin:"1rem",
               borderColor:"#66FCF1 #66FCF1 transparent transparent"
           },
           "&:nth-of-type(2n):before":{
              right:"auto",
              left:"-0.625rem",
              borderColor:"transparent transparent #66FCF1 #66FCF1"
           }
       }
    },
    timeLineYear:{
        textAlign: "center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"2rem",
        background:"#66FCF1",
        color:"#0b0c10",
        lineHeight: 1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        }
    },
    heading:{
        color:"#66FCF1",
        padding:"3rem 0",
        textTransform:"upperCase"
    },
    subHeading:{
        color:"#45A29E",
        padding:"0",
        textTransform:"uppercase"
    }
   
}))
function Projects() {
    const classes = useStyles()
    return (
        <div>
        <Navbar/>
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align='center' className={classes.heading} >
                Working Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
                Web Developer
            </Typography>
            <Typography variant="body1" aligh="center" style={{color:"white"}} >
                Company Name
            </Typography>
            <Typography variant="subtitle1" aligh="center" style={{color:"white"}}>
                lorem kdfj dkjfsd jdskfhks jsdffhj
                sddgshfgue hdfueuiw hfgyrtu
            </Typography>
            </Box>

            {/* second row */}

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2019
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
                Web Developer
            </Typography>
            <Typography variant="body1" aligh="center" style={{color:"white"}} >
                Company Name
            </Typography>
            <Typography variant="subtitle1" aligh="center" style={{color:"white"}}>
                lorem kdfj dkjfsd jdskfhks jsdffhj 
                jsdhfkjsd jskdsfhjdf 
                sddgshfgue hdfueuiw hfgyrtu jdshfjksd
                 jdhfjksdf kjdd fjksd
            </Typography>
            </Box>

            {/* third row */}

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
                Web Developer
            </Typography>
            <Typography variant="body1" aligh="center" style={{color:"white"}} >
                Company Name
            </Typography>
            <Typography variant="subtitle1" aligh="center" style={{color:"white"}}>
                lorem kdfj dkjfsd jdskfhks 
                jsdffhj kjsdhjk jkhfk jkkjdsfh 
                sddgshfgue hdfueuiw hfgyrtu jhj
                jdfhff e jd iwew skd
            </Typography>
            </Box>

            {/* Fourth Row */}

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
                Web Developer
            </Typography>
            <Typography variant="body1" aligh="center" style={{color:"white"}} >
                Company Name
            </Typography>
            <Typography variant="subtitle1" aligh="center" style={{color:"white"}}>
                lorem kdfj dkjfsd jdskfhks jsdffhj 
                jhdfjdfh jdhfjkhfkjf
                sddgshfgue hdfueuiw hfgyrtu ksjfkj fjw
                 iweu wfhwe k edjdh
            </Typography>
            </Box>
            
            </Box>
        </Box>
            
        </div>
    )
}

export default Projects;
