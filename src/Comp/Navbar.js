import React,{useState} from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {AppBar,
     Toolbar,
      ListItem, 
      IconButton,ListItemIcon, ListItemText, Avatar, Divider, List,Typography,Box} 
      from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home,Apps,ContactMail} from "@material-ui/icons";
import avatar from '../assets/1.png';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

//Css Styling
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
      width:250,
      background: '#66FCF1',
      height:"100%",
    },
    avatar:{
        display:"block",
        margin:"0 1.5rem",
        width: theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color: "#0b0c10"
    }
}));

const menuItems = [{ 
    listIcon: <Home/>,
    listText: "Home",
    listPath: '/'
},
{
    listIcon: <AssignmentInd/>,
    listText: "Projects",
    listPath: '/projects'
},
{
    listIcon: <Apps/>,
    listText: "About Me",
    listPath: '/about'
},
{
    listIcon: <ContactMail/>,
    listText: "Contact Me",
    listPath: '/contact'
},

]

const Navbar = () =>{
    const [state, setState] = useState({right:false});
    const toggleSlider = (slider,open) => () =>{
        setState({...state, [slider]:open})
    }
    const classes = useStyles();
    const sideList = slider => (
        <Box className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
        <Divider/>
        <List>
            {menuItems.map((isItem, key)=>(
                <ListItem button key={key} component={Link} to={isItem.listPath}>
                  <ListItemIcon className={classes.listItem}>
                     {isItem.listIcon}
                  
                  </ListItemIcon>
                   <ListItemText className={classes.listItem} primary={isItem.listText}/>
                </ListItem>
            ))}
            
        </List>
    </Box>

    )
    return (
        <div>
            <Box component="nav">
              <AppBar position="static" style={{background:"#0b0c10"}}>
                 <Toolbar>
                  <IconButton onClick={toggleSlider("right", true)}>

                  <ArrowBack style={{color: "#45a29e"}}/>
                  </IconButton>
                  <Typography variant="h5" style={{color: "#ffffff"}} >PortFolio</Typography>
                  <MobilRightMenuSlider anchor="right"  open={state.right} onClose={toggleSlider("right", false)} >
                     {sideList("right")}
                     <Footer/>
                  </MobilRightMenuSlider>
               </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar;