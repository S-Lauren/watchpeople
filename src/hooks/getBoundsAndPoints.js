
import L from 'leaflet';
import {usePositionsData } from './positionsData';


export function useGetBoundsAndPoints(points){
    const getPoints = usePositionsData(points);
    const tmpBounds = L.bounds(getPoints);
    const bounds = [[tmpBounds.min.x , tmpBounds.min.y],[tmpBounds.max.x, tmpBounds.min.y]];

    return {points:getPoints, bounds:bounds}
}