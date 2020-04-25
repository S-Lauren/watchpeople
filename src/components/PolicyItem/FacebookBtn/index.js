import React from 'react'; 
import {makeStyles} from '@material-ui/core';


const style = { 
  btnFb: {
    width: '100px',
    backgroundColor: '#395694',
    borderRadius: '50px',
    border: 'none',
    height: '30px',
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '10px',
   "&:hover": {
      backgroundColor: "#06326b",
      color: '#FFF',
      cursor: 'pointer'
  }
}
}

const useStyles = makeStyles(style)

const FacebookBtn = (props) => {

const classes = useStyles();
  const sourceFacebook = () => {
    const copyMessage = props.date.slice();
    const filterFB = copyMessage.filter(src=> src.source === "facebook");
    props.setmsg(filterFB);
  }
  return (
  <React.Fragment >
    <button className={classes.btnFb} onClick={sourceFacebook}>Facebook</button>
  </React.Fragment>
  )
}

export default FacebookBtn; 