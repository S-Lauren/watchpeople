import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link as MeinRouterLink} from 'react-router-dom';




const InmateList = ({listItem, userImage}) => {

  return (
    <Grid>
      {listItem.flat(3).map((x, i) => {
        return (
          <React.Fragment key={i}>
            { x.isActive === true &&
            <MeinRouterLink to={{ pathname: `/prisoners/${x._id}`,state: {data: x }}}>
              <Grid container direction="row"  spacing={4}>
                <Grid item  xs={12} sm={12}>
                  <ButtonBase>                  
                    <img src={userImage[i]} alt="inmate portrait"/>
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12}  >

                  <Grid item xs container direction="column" spacing={5}>
                    <Grid item xs >
                      <Typography>{x.name.first} {x.name.last}</Typography>
                      <Typography> Registered : {x.registered}</Typography> 
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

export default InmateList; 