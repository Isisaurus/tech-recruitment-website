import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  thumbnail: {
    width: '500px',
    height: '200px',
    [theme.breakpoints.down('xs')]: {
      height: '150px',
    },
  },
  Card: {
    boxShadow: '-.5rem 1rem 2rem rgba(0,0,0, .15)',

    '&:hover': {
      boxShadow: '-.5rem 1rem 2rem rgba(4,103,177, .2)',
      transition: 'all .2s ease',
    },
  },
  CardContent: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '12rem',
  },
  button: {
    textTransform: 'none',
    fontWeight: 400,
    padding: 0,
  },
  labelContainer: {
    display: 'flex',
    marginTop: 'auto',
  },
}));
