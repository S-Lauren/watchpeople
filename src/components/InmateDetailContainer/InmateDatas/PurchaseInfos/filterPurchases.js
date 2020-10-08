import React,{useState} from 'react';
import {
  Slider,
  Input,
  Button,
  Box,
  makeStyles, Grid
} from '@material-ui/core'


const styles = {
  root: {
    width: '100%',
    backgroundColor: '#010525', 
    margin: '1rem', 
  
  }, text: {
    color: 'white', 
    textAlign: 'center'
  }, 
  btnFilter: {
    width: '200px',
    backgroundColor:'#0CCEC3', 
    color:'#010525', 
    borderRadius: "50px", 
    margin: '1rem'
  }, 
  input: {
    width: '100px', 
    marginLeft: '1rem'
  }, 
  slider: {
    color: '#0CCEC3', 
    margin: '2rem 5rem 0 5rem'
  }


}

const useStyles = makeStyles(styles)



export default function FilterPurchases({setFilter}){

    const classes = useStyles();
    const [valueFilter, setValueFilter] = useState(0);

    const handleSliderChange = (event,newValue)=>{
      setValueFilter(newValue)
    };

    const handleInputChange = (event) => {
      setValueFilter(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
      if (valueFilter < 0) {
        setValueFilter(0);
      } else if (valueFilter > 5000) {
        setValueFilter(5000);
      }
    };
    
    const handleSubmit = (event)=>{
      event.preventDefault();
      setFilter(valueFilter)
    }

  return(
    <Grid container className={classes.container} justify="center">
      <Grid  container className={classes.root} justify="center">
        <Slider 
          className={classes.slider}
          value={valueFilter}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          min={0}
          max={5000}
        />
        <Grid container justify="center" direction="row" alignItems="center">
          <Grid item>
            <p className={classes.text}>Filter purchases between 0 and </p>
          </Grid>
          <Grid item>
          <input
            className={classes.input}
            value={valueFilter}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          </Grid>
        </Grid>
        <Grid item>
          <Button className={classes.btnFilter}onClick={handleSubmit} variant="contained">Filter</Button>
        </Grid>
      </Grid>
  
    </Grid>
  );
}