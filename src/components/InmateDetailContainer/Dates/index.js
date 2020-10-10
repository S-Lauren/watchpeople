import React, {useState} from "react"; 
import {useGetUser} from '../../../hooks/getUser'; 
import Message from '../InmateDatas/Message'; 

import Grid from '@material-ui/core/Grid';
import FilterDates from '../FilterDates';
import FacebookBtn from '../FacebookBtn';
import {makeStyles} from '@material-ui/core';


const style = { 
  root: {
    marginBottom: '1rem'
  },
  btnClose: {
    margin: '1rem',
    backgroundColor: '#ff5938',
    borderRadius: '50px',
    width: '30px',
    height: '30px',
    color: '#FFF',
    fontWeight: 'bold',
    border: 'none',
    marginLeft: '10px',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: "#c11111",
      color: '#FFF',
      cursor: 'pointer'
    }
  
  }
}

const useStyles = makeStyles(style);

const Dates = (props) => {
const classes = useStyles(); 

  const users = useGetUser();
  const getMessages = users.data.messages;

  const [msg, setMsg] = useState(getMessages); 
  const [openMsg, setOpenMsg] = useState(false); 


  return (
    <React.Fragment> 
      <Grid container justify="center" direction="row" className={classes.root}>
        <FilterDates date={props.dates} setopen = {setOpenMsg} setmsg ={setMsg}/>
        <FacebookBtn date={props.dates} setmsg ={setMsg}/>
          {openMsg&&
            <button className={classes.btnClose} onClick={()=> setOpenMsg(false)}>X</button>
          }
          {openMsg&& 
            <Message message= {msg}/>
          }
      </Grid>
    </React.Fragment>
  )

}

export default Dates; 