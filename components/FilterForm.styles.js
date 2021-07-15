import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  formControl: {
    width: '35rem',
    maxWidth: '100%',
  },
  rangeContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  TextField1: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  buttonsContainer: {
    marginTop: '4rem',
    marginBottom: '1rem',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button1: {
    marginRight: '2rem',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginBottom: '1rem',
    },
  },
}));
