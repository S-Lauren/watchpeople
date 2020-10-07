
export function usePositionsData(positions){

    let tabPosition = []
    let cpPositions = positions.position.slice()
    cpPositions.forEach(element => {
        const tmp = JSON.parse('['+element+']');
        tabPosition.push(tmp)
    });

    return tabPosition;
}