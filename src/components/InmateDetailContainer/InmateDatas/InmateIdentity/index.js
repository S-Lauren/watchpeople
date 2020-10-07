import React from 'react';
import InfoItemPolicyItem from '../../GeneralComponents/infoItemPolicyItem.js';
import {Divider} from '@material-ui/core';

export default function InmateIdentity({user}){
    return(
        <>    
            <InfoItemPolicyItem title="address :" content={user.address} />
            <Divider />
            <InfoItemPolicyItem title="phone :" content={user.phone}  inline />
            <Divider />
            <InfoItemPolicyItem title="email :"  content={user.email} />
            <Divider />
            <InfoItemPolicyItem title="age :" content={`${user.age} ans`} inline />
            <Divider />
            <InfoItemPolicyItem title="eye color :" content={user.eyeColor} inline />
            <Divider />
            <InfoItemPolicyItem title="favorite fruit :" content={user.favoriteFruit} inline />
        </>
    );
}