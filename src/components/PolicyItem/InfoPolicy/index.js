import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import PurchaisesInfos from './purchaisesInfo';
import ExpansionPanel from '../componentsGeneral/expansionPanel';
import GeneralInfo from './generalInfo';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import Message from '../InfoPolicy/Message';
import Dates from '../Dates';
import UserbyMsg from '../UserbyMsg'; 

const style = { 
    root: {
        backgroundColor: '#2D3E52',
        flexDirection: 'column'
    },
}

const useStyles = makeStyles(style)

export default function InfoListPolicyItem({user}){

    const classes = useStyles();
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
    },[])

    return(
        <>
            <ExpansionPanel title="General Info">
                <GeneralInfo user={user} />
            </ExpansionPanel>
            <ExpansionPanel title="Last Purchases"   icon={soMuch ? <LocalAtmIcon htmlColor='#b71c1c'/> : ""} >
                <PurchaisesInfos purchases={user.purchases} />
            </ExpansionPanel>
            <ExpansionPanel title="Last Messages" icon={<UserbyMsg users={user.messages}/>}>
              <Dates dates={user.messages}/>
            </ExpansionPanel>
        </>
    );
}