import React, {useState, useEffect} from 'react'; 
import data from '../../data.json'; 
import Grid from '@material-ui/core/Grid';

import InmateList from '../InmateList/index';


const SearchInmates = () => {

  const [list, setList] = useState([data]); 
  const [image, setImages] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(resp => resp.json())
    .then(data => {
       const getImage = data.results.map(user => user.picture.large); 
      setImages(getImage); 

      })
  }, []); 

  const handleSearch = e => {

  const copydata = [...data].filter(x => {
    return (x.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
      x.name.last.toLowerCase().includes(e.target.value.toLowerCase()))   
    });
    setList(copydata);   
  }

  const onFilterEyeColor = () => {
    const copydata = [...data].filter(x => x.eyeColor === "brown")
    setList(copydata); 
  }
  const onFilterApple = () => {
    const copydata = [...data].filter(x => x.favoriteFruit === "apple")
    setList(copydata); 
  }
  const onFilterBanana = () => {
    const copydata = [...data].filter(x => x.favoriteFruit === "banana")
    setList(copydata); 
  }
  const allPrisoners = () => {
    const copydata = [...data].map(x => x);
    setList(copydata); 
  }

    return (
      <Grid spacing={4} width="100%" container direction="column">
        <Grid container justify-content="center" alignItems="center"> 
          <Grid item>
            <h1 xs={3}> List of inmates</h1>
            <input type="text" onChange={handleSearch} placeholder="First or Last name..."/>
          </Grid> 
          <Grid item xs={12} sm={12}>
            <button onClick={onFilterEyeColor}>Brown eyes</button>
            <button onClick={onFilterBanana}> Banana </button>
            <button onClick={onFilterApple}>Apple</button>
            <button onClick={allPrisoners}>All active</button>
          </Grid> 
        </Grid>
        <Grid item>
          { list.length === 0&&
            <p> no matches found </p>
          }
          <InmateList listItem = {list} userImage={image}/>
        </Grid>
      </Grid>
    )
}

export default SearchInmates; 