
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      // flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(72),
      },
    },
    inputField: {
        '& > *': {
          
          margin: theme.spacing(1),
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '35ch',
          height: '6ch'
        },
    },
    signUpPaper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(8),
      },
    },  
    
  }));

  export default useStyles