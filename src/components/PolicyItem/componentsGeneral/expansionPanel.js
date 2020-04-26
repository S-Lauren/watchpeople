import React from 'react';
import {
    makeStyles, 
    ExpansionPanel as Panel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style = { 

    root: {
        backgroundColor: '#2D3E52',
        flexDirection: 'column',
        margin: '0',
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

  panel: {
 '&$expanded': {
      margin: '20px 0', 
    }
  }

}

const useStyles = makeStyles(style)


export default function ExpansionPanel(props){
    
    const classes = useStyles();

    return(
        <Panel className={classes.panel}>
            <ExpansionPanelSummary className={classes.expansionSummary} expandIcon={<ExpandMoreIcon className={classes.icon} />}>
                <Typography variant='h2' className={classes.title} >
                    {props.title}
                    {props.icon && <span> {props.icon}</span>}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.root}>
                {props.children}
            </ExpansionPanelDetails>
        </Panel>
    );
}


