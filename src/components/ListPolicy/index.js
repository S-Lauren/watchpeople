import React, {useState, useEffect} from 'react'; 
import data from '../../data.json'; 
import ItemList from './ItemList'
import Grid from '@material-ui/core/Grid';
import {stylesList} from './stylesList';

const useStyle = stylesList(); 

const ListPolicy = (props) => {

  const classes = useStyle(); 



  const [list, setList] = useState([data]); 
  const [search, setSearch] = useState(''); 

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
     
         
        <Grid container justify="center" alignItems="center" className={classes.inputBox}> 
         
           
            <Grid item>
                <h1 xs={3} className={classes.mainTitle}> List of inmates</h1>
              <input className={classes.searchInput} type="text" onChange={handleSearch} placeholder="First or Last name..."/>
            </Grid> 
          <Grid item xs={12} sm={12}>
            <button className={classes.filterButton} onClick={onFilterEyeColor}>Brown eyes</button>
            <button className={classes.filterButton} onClick={onFilterBanana}> Banana </button>
            <button className={classes.filterButton} onClick={onFilterApple}>Apple</button>
            <button className={classes.filterButton} onClick={allPrisoners}>All active</button>
          </Grid> 
        </Grid>
        <Grid item>
          { list.length === 0&&
            <p> no matches found </p>
          }
          <ItemList listItem = {list}/>
        </Grid>
      
      </Grid>
    )
}

export default ListPolicy; 