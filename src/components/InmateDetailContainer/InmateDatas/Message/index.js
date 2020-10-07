import React from 'react'; 
import InfoItemPolicyItem from '../../GeneralComponents/infoItemPolicyItem'; 



const Message = (props) => {

  return (     
    <React.Fragment>    
      {props.message.map((x,i) =>  
        <InfoItemPolicyItem key={i} title="messages" content={x.content}  inline/> 
      )}   
    </React.Fragment>
  )
}

export default Message; 