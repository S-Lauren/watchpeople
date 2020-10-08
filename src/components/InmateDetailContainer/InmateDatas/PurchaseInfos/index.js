import React, { useState } from 'react';
import {Button, makeStyles} from '@material-ui/core';
import FilterPurchases from './filterPurchases';
import AccordionContent from '../../GeneralComponents/accordionContent.js';

const useStyle = makeStyles({
  btnFilter: {
    color: 'white'
  }
})

export default function PuchaseInfos({purchases}){
  const css = useStyle()
  const [listPurchases, setListPurchases] = useState(purchases);
  const [openFilter, setOpenFilter] = useState(false)
  
  const handleFilterPurchases = (valueFilter)=>{
    const cpPurchases = purchases.slice();
    const filterPurchases = cpPurchases.filter(purchase => purchase.amount > valueFilter)
    setListPurchases(filterPurchases);
  }

  return(
    <>
      <Button className={css.btnFilter} onClick={()=>setOpenFilter(!openFilter)}>Click here for {!openFilter ? 'more' : 'less'} filters </Button>
      {openFilter && <FilterPurchases setFilter={handleFilterPurchases}/>}
      {listPurchases.map((purchase,id)=>{
        return <AccordionContent key={id} title={`${purchase.date}`} content={`${purchase.amount} $`} />
      })}
    </>
  );
}