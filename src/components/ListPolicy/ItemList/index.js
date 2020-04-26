import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {stylesList} from '../stylesList';
import {Link as MeinRouterLink} from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';


// media query test...

const useStyle = stylesList(); 

function ItemList({listItem, userImage}) {

  const classes = useStyle(); 
  return (
    <Grid className={classes.root} >
      {listItem.flat(3).map((x, i) => {
      
        return (
          <React.Fragment key={i}>
            { x.isActive === true &&
            <MeinRouterLink to={{ pathname: `/prisoners/${x._id}`,state: {data: x }}}>
              <Grid container direction="row"  spacing={4}className={classes.root} >
                <Grid item  xs={12} sm={3}>
                  <ButtonBase className={classes.image}>                  
                      <img   className={classes.img} src={userImage[i]}/>
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={6} >

                  <Grid item xs container direction="column" spacing={5}>
                    <Grid item xs className={classes.fontInfos}>
                      <Typography className={classes.fontUser}>{x.name.first} {x.name.last}</Typography>
                      <Typography className={classes.fontRegistred}> Registered : {x.registered}</Typography> 
                    </Grid>          
                  </Grid>
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

export default ItemList; 