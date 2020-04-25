import React, { useState } from 'react';
import InfoItemPolicyItem from '../../componentsGeneral/infoItemPolicyItem.js';
import {Slider, Input, Button} from '@material-ui/core';
import FilterPurchases from './filterPurchases';



export default function PuchaisesInfo({purchases}){
    const [listPurchases, setListPurchases] = useState(purchases);
    const [openFilter, setOpenFilter] = useState(false)
    

    const handleFilterPurchases = (valueFilter)=>{
        const cpPurchases = purchases.slice();
        const filterPurchases = cpPurchases.filter(purchase => purchase.amount > valueFilter)
        setListPurchases(filterPurchases);
    }
    // console.log('Purchase', purchases)
    // const test = purchases.filter(purchase=> purchase.amount <2000);
    // console.log('TEST',test)

    return(
        <React.Fragment>
            <Button onClick={()=>setOpenFilter(!openFilter)}>Click here for {!openFilter ? 'more' : 'less'} filters:</Button>
            {openFilter && <FilterPurchases setFilter={handleFilterPurchases}/>}
            {listPurchases.map((purchase,id)=>{
                return <InfoItemPolicyItem key={id} title={`Date purchase: ${purchase.date}`} content={`${purchase.amount} $`} />
            })}
        </React.Fragment>
    );
}