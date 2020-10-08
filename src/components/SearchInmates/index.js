import React, {useState, useEffect} from 'react'; 
import data from '../../data.json'; 
import Grid from '@material-ui/core/Grid';
import InmateList from '../InmateList/index';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useTheme = makeStyles((theme) => ({
  mainTitle: {
    color: "white",
    fontWeight: "bold",
    marginTop: "1rem",
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
    }
  },
}));


const useStyle = makeStyles({
  root: {
    backgroundColor: '#0E1834',
    width: '100%', 
    minHeight:" 24vh",

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
    width: '80%',
   
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }, 
  btnStyle: {
    width: '120px',
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
    margin: '1rem 2rem 0 2rem', 
    height: '30px', 
    borderRadius: '50px', 
    textAlign: 'center'
  }, 
  subtitle: {
    color: 'white', 
    textAlign: 'center', 
    marginTop: '1rem'
  },

})



const SearchInmates = () => {

  const css = useStyle()
  const theme = useTheme()
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

  const onFilterStrawberry = () => {
    const copydata = [...data].filter(x => x => x.favoriteFruit === "apple")
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
        <Grid container justify="center" alignItems="center" direction='row'> 
          <Grid item className={css.titleContainer} xs={12} sm={6}> 
            <Typography variant="h3" className={theme.mainTitle} > List of inmates</Typography>
            <input className={css.searchBar} type="text" onChange={handleSearch} placeholder="First or Last name..."/>
            <Typography className={css.subtitle}><em>Filter inmates by their favorite fruit</em></Typography>
          </Grid> 
          <Grid container className={css.btnContainer} >
         
            <Box item m={2}xs={12} sm={12} >
              <button className={css.btnStyle} onClick={onFilterStrawberry}><span role="img" aria-label="strawberry">🍓 Strawberry</span></button >
            </Box>
            <Box item m={2}>
              <button className={css.btnStyle} onClick={onFilterBanana}><span role="img" aria-label="banana">🍌 Banana</span> </button >
            </Box>
            <Box item m={2}>
              <button className={css.btnStyle} onClick={onFilterApple}><span role="img" aria-label="apple">🍏 Apple</span></button>
            </Box>
            <Box item m={2}>
              <button className={css.btnStyle} onClick={allPrisoners}>All Active</button>
            </Box>
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