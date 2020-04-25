import React from 'react';
import { 
    Box,
    Typography, 
    Avatar,
    makeStyles 
} from '@material-ui/core';

const style = (theme)=>({
    root: {
        backgroundColor: '#0E1834',
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '900',
        color: '#FFF',
        paddingBottom: '1rem'
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '1rem'
    }
})

const useStyles = makeStyles(style);

export default function HeaderPolicyItem({name, url, age}){

    const classes = useStyles();

    return(
        
        <Box component="article" className={classes.root}>
            <Typography variant="h1" className={classes.title} align="center" >
                {`${name.first} ${name.last}`} 
            </Typography>
            <Avatar 
                alt={`${name.first} ${name.last}`} 
                src={`${url}`} 
                className={classes.avatar} 
            />
        </Box>
    );
}