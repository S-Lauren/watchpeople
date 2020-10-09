import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import {Link as MeinRouterLink} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'

const styles = makeStyles({
  navbar: {
    width: '100%',
    height: '5vh', 
    backgroundColor: 'black', 
    paddingTop: '10px',
    margin: '0 0 3rem 0'
  }, 
  btnGoBack: {
    color: 'white', 
    textDecoration: 'none',
    margin: "1rem 1rem ", 

  }, 
  svg: {
    width: '20px', 
    height: '20px'
  }
})

const Navbar = () => {
  const css = styles()
  return (
    <>
    <Grid className={css.navbar}>
      <MeinRouterLink className={css.btnGoBack} to={{ pathname: "/"}}>
        <Grid className={css.svg}>
          <ArrowLeft/> Back
        </Grid>
      </MeinRouterLink>
    </Grid>
    </>
  );
};

export default Navbar;