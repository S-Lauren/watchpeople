import React,{useState, useEffect} from 'react';
import PurchaseInfos from './PurchaseInfos';
import ExpansionPanel from '../GeneralComponents/expansionPanel';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Dates from '../Dates';
import InmateIdentity from './InmateIdentity';
import FilterInsult from '../FilterInsult';



 const InmateDatas = ({user}) => {

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
      <ExpansionPanel title="General Info">
        <InmateIdentity user={user} />
      </ExpansionPanel>
      <ExpansionPanel title="Last Purchases" icon={soMuch ? <LocalAtmIcon htmlColor='#b71c1c'/> : ""} >
        <PurchaseInfos purchases={user.purchases} />
      </ExpansionPanel>
      <ExpansionPanel title="Last Messages" icon={<FilterInsult users={user.messages}/>}>
        <Dates dates={user.messages}/>
      </ExpansionPanel>
    </>
  );
}

export default InmateDatas; 