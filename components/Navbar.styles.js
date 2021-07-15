import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  AppBar: {
    boxShadow: 'none',
    marginTop: '1rem',
    padding: '0 2rem',
    position: 'absolute',
    top: '0',
    [theme.breakpoints.down('xs')]: {
      padding: '0 .5rem',
      marginTop: '0',
    },
  },
  logo: {
    marginRight: '1em',
    fontSize: '1rem',
    filter: 'none',
    background: 'linear-gradient( 90deg , #1E8DFF, #BE6CFF)',
    fontWeight: 700,
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#7a7a7a',
    '&:visited': {
      color: '#7a7a7a',
      '&:hover': {
        color: '#1E8DFF',
      },
    },
    '&:hover': {
      color: '#7a7a7a',
    },
  },
  burgerLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    marginLeft: 'auto',
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      padding: '.3em 2.3em',
    },
  },
  navEl: {
    marginLeft: '1.5em',
  },
  linksContainer: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },
  drawer: {
    padding: '2rem',
    textAlign: 'center',
  },
  burger: {
    position: 'absolute',
    right: '0',
    top: '1rem',
    padding: '0',
  },
}));
