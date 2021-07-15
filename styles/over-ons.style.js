import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  h1: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  header: {
    marginTop: '4rem',
    marginBottom: '4rem',
    padding: 'inherit 0',
  },
  link: {
    textDecoration: 'none',
  },
  headerContent: {
    marginTop: '4rem',
    marginLeft: '4rem',
    width: 'auto',
    padding: '0',
    maxWidth: '45rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
  },
}));
