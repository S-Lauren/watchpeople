import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {
    makeStyles,

} from '@material-ui/core';

const style = { 
    root: {
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    title: {
        color: '#0CCEC3',
        fontSize: '1.5rem',
        marginLeft: '1rem',
    },
    content: {
        color: '#FFF',
        marginLeft: '1rem',
    }
}

const useStyles = makeStyles(style)

export default function InfoItemPolicyItem({title, content, inline}){

    const classes = useStyles()

    return(
    
                <Box component="section" className={classes.root}>
                    <Typography
                        className={classes.title}
                        variant="h3" 
                        display={inline ? "inline" : "block"}
                    >
                        {title}
                    </Typography>
                    <Typography 
                        className={classes.content}
                        display={inline ? "inline" : "block"}
                    >
                        {content}
                    </Typography>
                </Box>

        );
} 