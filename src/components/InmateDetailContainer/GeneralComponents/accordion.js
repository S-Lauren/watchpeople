import React from 'react';

import {
  makeStyles, 
  Typography, Accordion as MainAccordion, AccordionDetails, AccordionSummary
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const style = { 

  root: {
    width: '100%',
    backgroundColor: '#2D3E52',
    flexDirection: 'column',
    margin: '0',
    padding: '0'
  },
  expansionSummary: {
    backgroundColor: '#0E1834',
  },
  title: {
    color: '#FFF',
    fontSize: '1.8rem'
  },
  icon: {
    color: '#FFF'
  },

  expanded: {
    
    '&$expanded': {
      margin: '0', 

    }
  },

}

const useStyles = makeStyles(style)

export default function Accordion(props){
    
  const classes = useStyles();

  return(
    <MainAccordion className={classes.expanded}>
      <AccordionSummary className={classes.expansionSummary} expandIcon={<ExpandMoreIcon className={classes.icon} />}>
        <Typography variant='h2' className={classes.title} >
          {props.title}
          {props.icon && <span> {props.icon}</span>}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.root}>
        {props.children}
      </AccordionDetails>
    </MainAccordion>
  );
}


