import React, { useState } from 'react';
import InfoItemPolicyItem from '../../GeneralComponents/infoItemPolicyItem.js';
import {Button} from '@material-ui/core';
import FilterPurchases from './filterPurchases';



export default function PuchaseInfos({purchases}){
  
    const [listPurchases, setListPurchases] = useState(purchases);
    const [openFilter, setOpenFilter] = useState(false)
    
    const handleFilterPurchases = (valueFilter)=>{
      const cpPurchases = purchases.slice();
      const filterPurchases = cpPurchases.filter(purchase => purchase.amount > valueFilter)
      setListPurchases(filterPurchases);
    }

    return(
      <>
        <Button onClick={()=>setOpenFilter(!openFilter)}>Click here for {!openFilter ? 'more' : 'less'} filters:</Button>
        {openFilter && <FilterPurchases setFilter={handleFilterPurchases}/>}
        {listPurchases.map((purchase,id)=>{
          return <InfoItemPolicyItem key={id} title={`Date purchase: ${purchase.date}`} content={`${purchase.amount} $`} />
        })}
      </>
    );
}