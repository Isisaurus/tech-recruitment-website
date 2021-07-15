import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  h1: {
    maxWidth: '45rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.2rem',
    },
  },
  overview: {
    color: 'white',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '& > *': {
      marginTop: '1rem',
    },
  },
  labelButton: {
    textTransform: 'none',
    fontWeight: '400',
  },
  thumbnailContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '30rem',
    height: '70vh',
    maxHeight: '45rem',

    [theme.breakpoints.down('xs')]: {
      height: '50vh',
      padding: '0 1rem',
      paddingTop: '2rem',
      alignItems: 'flex-start',
    },
  },
  thumbnail: {
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(1px)',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)',
  },
  paper: {
    marginTop: '-6em',
    padding: '1em 2em',
    boxShadow: '.3rem 1rem 1.5rem rgba(0,0,0,0.1)',
    maxHeight: '33rem',
    overflowX: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '25rem',
      padding: '.5rem 1rem',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ul: {
    margin: '4rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0',
      paddingLeft: '0',
    },
  },
  fileInput: {
    '& > input[type="file" i]': {
      '&::-webkit-file-upload-button': {
        visibility: 'hidden',
        width: '0',
      },
    },
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  TextField: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  message: {
    background: 'rgba(4,103,177, .1)',
    color: '#333',
    padding: '1em 3em',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}));
