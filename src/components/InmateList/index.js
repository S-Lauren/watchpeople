import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link as MeinRouterLink} from 'react-router-dom';
import { makeStyles, Paper } from '@material-ui/core';



const useStyle = makeStyles({
  root: {
    backgroundColor: '#2D3E52',
    margin: '0',
    padding: '30px', 
    width: '100%',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  link: {
    textDecoration: 'none'
  }, 
  name: {
    color: '#0CCEC3', 
    textAlign: 'center',
    fontSize: '20px',
    fontWeigth: '900', 
    margin: '1rem 0 0 0 ',

  },
  registered: {
    color: 'white',
    textAlign: 'center', 
    margin: '0 0 1rem 0 ',
  }, 
  imageContainer: {
   display: 'flex',
   justifyContent: 'center', 
   objectFit: "fill"
  },
  image: {
    borderRadius: '50%',
    justifyContent: 'center'
  }
})




const InmateList = ({listItem, userImage}) => {
const css = useStyle(); 
  return (
    <Grid  container className={css.root}>
      {listItem.flat(3).map((x, i) => {
        return (
          <React.Fragment key={i}>
            { x.isActive === true &&
            <MeinRouterLink className={css.link} to={{ pathname: `/prisoners/${x._id}`,state: {data: x }}}>
              <Grid container justify="center" direction='row'>
                <Grid item xs={12} sm={4} md={6} > 
                  <Grid className={css.imageContainer}>
                    <img className={css.image} src={userImage[i]} alt="inmate portrait"/>
                  </Grid>
                </Grid>
                <Grid item xs={12} >
                  <Typography  className={css.name}>{x.name.first} {x.name.last}</Typography>
                  <Typography className={css.registered}> {x.registered}</Typography> 
                </Grid>
              </Grid>
            </MeinRouterLink>
            }
        </React.Fragment>

        )       
      })}
    </Grid>
  )
}

export default InmateList; 