import React from 'react';
import {Divider} from '@material-ui/core';
import AccordionContent from '../../GeneralComponents/accordionContent.js';

export default function InmateIdentity({user}){
    return(
        <>    
            <AccordionContent title="address :" content={user.address} />
            <Divider />
            <AccordionContent title="phone :" content={user.phone}  inline />
            <Divider />
            <AccordionContent title="email :"  content={user.email} />
            <Divider />
            <AccordionContent title="age :" content={`${user.age} ans`} inline />
            <Divider />
            <AccordionContent title="eye color :" content={user.eyeColor} inline />
            <Divider />
            <AccordionContent title="favorite fruit :" content={user.favoriteFruit} inline />
        </>
    );
}