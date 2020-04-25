import React, {useState, useEffect} from 'react'; 
import {useGetUser} from '../../../hooks/getUser';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


const UserbyMsg = (props) => {

  const [users, setUser] = useState(false);
  useEffect(() => {
    handleUserMsg()
  }, [])
  const handleUserMsg = () => {
  props.users.filter(x => {
    if(x.content.includes("nulla")) {
      setUser(true)
      }
    })
  }
  
  return (
  <React.Fragment>
    {users&&
    <ErrorOutlineIcon htmlColor="red"/>
    }
  </React.Fragment>
  )
}

export default UserbyMsg; 