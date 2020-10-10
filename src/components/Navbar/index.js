import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {Link as MeinRouterLink} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left-white.svg'

const styles = makeStyles({
  navbar: {
    width: '100%',
    height: '8vh', 
    backgroundColor: 'black', 
    paddingTop: '10px',
    margin: '0 0 3rem 0'
  }, 
  btnGoBack: {
    color: 'white', 
    textDecoration: 'none',
    marginLeft: '1.2rem'
  }, 
  svg: {
    width: '30px', 
    height: '30px', 
    marginLeft: '1rem'
  }
})

const Navbar = () => {
  const css = styles()
  return (
    <>
    <Grid container className={css.navbar} alignItems='center'>
      <MeinRouterLink to={{ pathname: "/"}}>
        <Grid container direction='row' alignItems='center'>
          <Grid item className={css.svg} >
            <ArrowLeft/> 
          </Grid>
        
          <Grid item>
            <Typography className={css.btnGoBack}>Back to list </Typography>
          </Grid>
        </Grid>
      </MeinRouterLink>
    </Grid>
    </>
  );
};

export default Navbar;