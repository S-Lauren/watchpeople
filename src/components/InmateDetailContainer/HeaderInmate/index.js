import React from 'react';
import { 
  Box,
  Typography, 
  Avatar,
  makeStyles 
} from '@material-ui/core';

import Navbar from '../../Navbar';

const style = (theme)=>({
  root: {
    backgroundColor: '#0E1834',
    paddingBottom: '1rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '900',
    color: '#FFF',
    paddingBottom: '1rem'
  },
  avatar: {
    width: "150px",
    height: "150px",
    marginTop: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem'
  }
})

const useStyles = makeStyles(style);

const HeaderInmate = ({name, url}) => {

  const classes = useStyles();

  return(
    <Box component="article" className={classes.root}>
     <Navbar/>
      <Typography variant="h1" className={classes.title} align="center">
        {`${name.first} ${name.last}`} 
      </Typography>
      <Avatar alt={`${name.first} ${name.last}`} src={`${url}`} className={classes.avatar}/>
    </Box>
  );
}
export default HeaderInmate;