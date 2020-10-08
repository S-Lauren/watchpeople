import React from 'react'; 
import {Grid, makeStyles} from '@material-ui/core';
import FacebookBtn from '../FacebookBtn';


const style = { 
  btnFb: {
    backgroundColor: '#395694',
    borderRadius: '50px',
    border: 'none',
    height: '30px',
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '10px'
   
  },
      btnApp: {
      width: '200px',
      fontWeight: 900,
      borderRadius: '50px',
      textAlign: 'center',
      marginTop: '20px',
      marginLeft: '10px',
      height: '30px', 
      border: 'none',
      "&:hover": {
      backgroundColor: "#0CCEC3",
      color: '#0E1834',
      cursor: 'pointer'
    }
  }
}
const useStyles = makeStyles(style)

 const FilterDates = (props) => {
  const classes = useStyles(); 

  const handleDates = (e) => {
    const input = e.target.value; 
  
    const copyMessage = props.date.slice();
    const filterMsg = copyMessage.filter(msg => new Date(msg.date) >= new Date(input));
    props.setopen(true)
    props.setmsg(filterMsg)

  }

  const displayMsg = () => {
    const copyMessages = props.date.slice();
    const display = copyMessages.map(x => x);
    props.setopen(true)
    props.setmsg(display)
    
  }

  return(
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems='center'>
        <input className={classes.btnApp} type='date'  onChange ={handleDates} />
        <button className={classes.btnApp} onClick={displayMsg}>All Messages</button>
      </Grid>
    </React.Fragment>
  )

} 

export default FilterDates; 