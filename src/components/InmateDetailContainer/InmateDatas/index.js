import React,{useState, useEffect} from 'react';
import PurchaseInfos from './PurchaseInfos';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Dates from '../Dates';
import InmateIdentity from './InmateIdentity';
import FilterInsult from '../FilterInsult';
import { Grid, makeStyles } from '@material-ui/core';
import Accordion from '../GeneralComponents/accordion';


  const useStyle = makeStyles({
    root: {
      width: '100%', 
      backgroundColor: 'black',
      overflow: 'hidden'
    },
    expanded: {
    '&$expanded': {
        margin: '25px 0'
      }
    }
  })

 const InmateDatas = ({user}) => {
  const css = useStyle()
  const [soMuch, setSoMuch] = useState(false)

  const getSoMuch = ()=>{
    if(user.purchases.every(purchaise => purchaise < 3000)){
      setSoMuch(false)
    }else{
      setSoMuch(true)
    }
  }

  useEffect(()=>{
    getSoMuch()
  })

  return(

    <>
    <Grid className={css.root}>
      <Accordion className={css.expanded} title="General Info">
        <InmateIdentity user={user} />
      </Accordion>
      <Accordion title="Last Purchases" icon={soMuch ? <LocalAtmIcon htmlColor='#b71c1c'/> : ""} >
        <PurchaseInfos purchases={user.purchases} />
      </Accordion>
      <Accordion title="Last Messages" icon={<FilterInsult users={user.messages}/>}>
        <Dates dates={user.messages}/>
      </Accordion>
    </Grid>
    </>
  );
}

export default InmateDatas; 