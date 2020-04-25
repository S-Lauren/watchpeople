import React from 'react';
import {Container} from '@material-ui/core';
import HeaderPolicyItem from './headerPolicyItem';
import CartoPolicyItem from './cartoPolicyItem';
import { useGetUser } from '../../hooks/getUser';
import { makeStyles } from '@material-ui/core';
import Message from './InfoPolicy/Message';
import InfoPolicy from './InfoPolicy';
// import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const style = {
    root: {
        padding: 0,
    }
}

const useStyles = makeStyles(style)


function PolicyItem(){
    const classes = useStyles();
    const user = useGetUser();

    return(
        <Container component="main" className={classes.root}>    
            <HeaderPolicyItem name={user.data.name} url={user.data.picture} age={user.data.age} />
            <CartoPolicyItem position={user.data.positions}/>
            <InfoPolicy user={user.data}/> 
        </Container>
    );
}
export default PolicyItem;