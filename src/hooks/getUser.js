import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

import dataFake from '../data.json';

export function useGetUser(){
    let resultat;
    const location = useLocation()
    const param = useParams()
    
    if(location.state === undefined){
        const data = dataFake;
        resultat = data.filter(user => user._id === param.id)  
        return {data:resultat[0]}
    }else{
        return location.state;
    }
    
}