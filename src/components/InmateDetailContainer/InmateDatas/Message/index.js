
import React from 'react'; 
import AccordionContent from '../../GeneralComponents/accordionContent';




const Message = (props) => {

  return (     
    <React.Fragment>    
      {props.message.map((x,i) =>  
      
        <AccordionContent key={i} title={x.date} content={x.content}  inline/> 
      )}   
    </React.Fragment>
  )
}

export default Message; 