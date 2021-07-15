import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paginationButton: {
    padding: '.5em',
    color: '#7a7a7a',
    '&:hover': {
      background: 'none',
      color: '#333',
    },
  },
  h1: {
    marginTop: '4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  header: {
    height: '40vh',
    maxHeight: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '13rem',
    },
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  searchInput: {
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
  searchButton: {
    margin: '0',
    paddingBottom: '.3rem',
    borderBottom: '2px solid #7a7a7a',
    borderRadius: 0,
    '&:hover': {
      borderBottom: '2px solid #0467B1',
    },
    [theme.breakpoints.down('xs')]: {
      borderBottom: '2px solid transparent',
      marginTop: '1rem',
      padding: '.3rem 0rem',
    },
  },
}));
