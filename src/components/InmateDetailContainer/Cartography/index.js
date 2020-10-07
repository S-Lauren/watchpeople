import React from 'react';
import {Map as LeafletMap, TileLayer, Marker} from 'react-leaflet';
import {Box,makeStyles} from '@material-ui/core';
import { useGetBoundsAndPoints } from '../../../hooks/getBoundsAndPoints';


const useStyles = makeStyles({
  map: {
      height: '30vh',
  }
})

const Cartography = (props) => {
  
  const classes = useStyles();
  const {points , bounds} = useGetBoundsAndPoints(props)    
    
  return(
    <Box component="section">
      <LeafletMap bounds={bounds} className={classes.map}>
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {points.map((value, id) =>{
          return(
            <Marker key={id} position={value} />
          )
        })}
      </LeafletMap>
    </Box>
  );
}
export default Cartography; 