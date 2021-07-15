import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  teamMem: {
    marginTop: '2rem',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '2rem',
    padding: '0 4rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
      justifyContent: 'center',
    },
  },
  name: {
    marginBottom: '.5em',
  },
  teamMemImageCont: {
    [theme.breakpoints.down('xs')]: {
      order: '-1',
    },
  },
}));
