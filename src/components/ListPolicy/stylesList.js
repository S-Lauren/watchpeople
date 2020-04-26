import { makeStyles, createStyles } from '@material-ui/core/styles';


export function stylesList() {
  return makeStyles(() => createStyles({
      root: {
          flexGrow: 1,
          backgroundColor: '#2D3E52'
        },
      mainTitle: {
          color: "#FFF",
          textAlign: 'center'
      },
      filterButton: {
          width: '100px',
          fontWeight: 900,
          borderRadius: '50px',
          marginTop: '20px',
          marginLeft: '20px',
          height: '30px', 
          border: 'none',
          "&:hover": {
          backgroundColor: "#0CCEC3",
          color: '#0E1834',
          cursor: 'pointer'
        }
      },
      inputBox: {
          backgroundColor:'#0E1834',
          width: '100%',
          paddingBottom: '20px'
      
          
        },
      searchInput: {
          backgroundColor:'#010525',
          textAlign: 'center',
          marginTop: '20px',
          width: '250px',
          border: 'none',
          height: '35px',
          borderRadius: '50px',
          color: '#FFF',
          justifyContent: 'center'
        },

        img: {
          borderRadius: '50%',
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
          },

        image: {
          width: 128,
          height: 128,

        },

        fontUser: {
          fontWeight: 900,
          fontSize: '30px',
          color: '#0CCEC3'
        },
        fontRegistred: {
          color: '#FFF'

        },
        fontInfos: {
          marginLeft: '40px'
        }
      }
    ));
}
