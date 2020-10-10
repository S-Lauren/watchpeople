import React from 'react';
import {Box, Typography} from '@material-ui/core';
import { makeStyles} from '@material-ui/core';

const style = { 
  root: {
    paddingTop: '1rem',
    paddingBottom: '1rem', 
    textAlign: 'center'
  },
  title: {
    color: '#0CCEC3',
    fontSize: '1.5rem',
  },
  content: {
    color: '#FFF',
    padding: '1rem'
  }
}

const useStyles = makeStyles(style)

const AccordionContent = ({title, content, inline}) => {
const classes = useStyles()

  return(
    <Box component="section" className={classes.root}>
      <Typography className={classes.title} variant="h3" display={inline ? "inline" : "block"}>
        {title}
      </Typography>
      <Typography className={classes.content} >
        {content}
      </Typography>
    </Box>
  );
} 

export default AccordionContent;