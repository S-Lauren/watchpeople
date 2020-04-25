import React,{useState} from 'react';
import {
    Slider,
    Input,
    Button,
    Box,
    withStyles,
    makeStyles
} from '@material-ui/core'


const styles = {
    root: {
        backgroundColor: 'grey' 
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

        <Box className={classes.root}>
            <Slider 
                value={valueFilter}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={0}
                max={5000}
            />
            <p>Filtrer les achats entre 0 et </p>
            <Input
                //className={classes.input}
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
            <Button onClick={handleSubmit} variant="contained">Filter</Button>
        </Box>


    );
}