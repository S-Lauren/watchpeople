import React from 'react';
import {Divider} from '@material-ui/core';
import AccordionContent from '../../GeneralComponents/accordionContent.js';

export default function InmateIdentity({user}){
    return(
        <>    
          <AccordionContent title="Address" content={user.address} />
          <Divider />
          <AccordionContent title="Phone" content={user.phone}  inline />
          <Divider />
          <AccordionContent title="Email"  content={user.email} />
          <Divider />
          <AccordionContent title="Age" content={`${user.age} ans`} inline />
          <Divider />
          <AccordionContent title="Eye color" content={user.eyeColor} inline />
          <Divider />
          <AccordionContent title="favorite fruit" content={user.favoriteFruit} inline />
        </>
    );
}