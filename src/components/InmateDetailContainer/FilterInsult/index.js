import React, {useState, useEffect} from 'react'; 
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';




const FilterInsult = (props) => {

  const [users, setUser] = useState(false);

  useEffect(() => {
    handleUserMsg()
  })

  const handleUserMsg = () => {
    props.users.filter(x => {
      if(x.content.includes("nulla")) {
        setUser(true)
      }
     return users; 
    })
  }
  
  return (
  <>
    {users&& <ErrorOutlineIcon htmlColor="red"/>}
  </>
  )
}

export default FilterInsult; 