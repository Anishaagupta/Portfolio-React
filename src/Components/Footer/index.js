import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
// import {Translate } from '@material-ui/icons';

//Css Styles

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& MuiSvgIcon-root': {
      fill: '#45A29E',
      '&:hover': {
        fill: '#1F2833',
        fontSize: '1.8rem',
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width='auto' style={{ background: '#45A29E' }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Twitter />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
    </BottomNavigation>
  );
};

export default Footer;
