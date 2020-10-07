import React, {useState, useEffect} from 'react'; 
import data from '../../data.json'; 
import Grid from '@material-ui/core/Grid';

import InmateList from '../InmateList/index';
import { makeStyles, Typography } from '@material-ui/core';



const useStyle = makeStyles({
  root: {
    backgroundColor: '#0E1834',
    width: '100%', 
    height:" 24vh",

  }, 
  mainTitle: {
    color: 'white',
    fontWeight: 'bold', 
    textAlign: 'center'
  }, 
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  btnContainer: {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }, 
  btnStyle: {
   
    height: '30px', 
    borderRadius: '50px', 
    border: "none",
    backgroundColor: '#3dc6c2', 
    cursor: 'pointer',
    color: '#0E1834',
    fontWeight: 'bold', 

  }, 
  searchBar: {
    color: "white", 
    backgroundColor: '#010525', 
    border: 'none', 
    marginTop: '1rem', 
    height: '30px', 
    borderRadius: '50px', 
    textAlign: 'center'
  }
})



const SearchInmates = () => {

  const css = useStyle()
  
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
    const copydata = [...data].filter(x => x.isActive === true);
    setList(copydata); 
  }

    return (
      <>
      <Grid  className={css.root} container justify='center'>
        <Grid container justify="center" alignItems="center"> 
          <Grid item className={css.titleContainer}>
            <Typography variant="h3" className={css.mainTitle} > List of inmates</Typography>
            <input className={css.searchBar} type="text" onChange={handleSearch} placeholder="First or Last name..."/>
          </Grid> 
          <Grid spacing={2} item className={css.btnContainer} xs={12} sm={12}>
            <button className={css.btnStyle} onClick={onFilterEyeColor}>Brown eyes</button >
            <button className={css.btnStyle} onClick={onFilterBanana}> Banana </button >
            <button className={css.btnStyle} onClick={onFilterApple}>Apple</button>
            <button className={css.btnStyle} onClick={allPrisoners}>All Active</button>
          </Grid> 
        </Grid>
      </Grid>
   
      { list.length === 0&&
        <p> no matches found </p>
      }
      <InmateList listItem={list} userImage={image}/>
   
    </>
    )
}

export default SearchInmates; 