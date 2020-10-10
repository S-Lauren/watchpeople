import React from 'react';
import {Grid} from '@material-ui/core';
import { useGetUser } from '../../../hooks/getUser';
import { makeStyles } from '@material-ui/core';
import Cartography from '../Cartography';
import HeaderInmate from '../HeaderInmate';
import InmateDatas from '../InmateDatas';
import { useLocation } from 'react-router-dom';




const style = {
  root: {
    padding: '0px',
    margin: '0px', 
    background: '#0e1834',
    width: '100%',
    height: '100vh'
  }
}

const useStyles = makeStyles(style)


const InmateDetails = () => {

  const classes = useStyles();
  const user = useGetUser();
  const location = useLocation()

  return(
    <Grid className={classes.root}>
      <HeaderInmate name={user.data.name} url={location.state.img} age={user.data.age} />
      <Cartography position={user.data.positions}/>
      <InmateDatas user={user.data}/> 
    </Grid>
  );
}
export default InmateDetails;