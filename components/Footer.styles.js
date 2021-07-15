import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  footer: {
    width: '100%',
    background: 'rgba(122,122,122, 0.05)',
    padding: '4rem 0',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  subscribeContent: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  subscribeInput: {
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid #7a7a7a',
    padding: '.5rem 1rem .5rem 0',
    textAlign: 'left',
    fontSize: '1rem',
    width: '20rem',
    maxWidth: '100%',
    background: 'transparent',
    fontFamily: 'inherit',
    color: 'inherit',

    '&:focus': {
      borderBottom: '2px solid #0467B1',
    },
    '&::placeholder': {
      color: '#7a7a7a',
      opacity: '.8',
    },
  },
  subscribeButton: {
    margin: '0',
    paddingBottom: '.3rem',
    borderBottom: '2px solid #7a7a7a',
    borderRadius: 0,

    '&:hover': {
      borderBottom: '2px solid #0467B1',
    },
    [theme.breakpoints.down('sm')]: {
      borderBottom: '2px solid transparent',
      marginTop: '1rem',
      padding: '.3rem 0rem',
    },
  },
  message: {
    background: '#fff',
    color: '#333',
    padding: '1em 3em',
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
}));
