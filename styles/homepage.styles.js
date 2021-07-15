import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  hero: {
    position: 'relative',
    height: '90vh',
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.75) 15%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.8) 85%), url(/homepage/hero.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '4rem',

    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      background:
        'linear-gradient(0deg, rgba(0,0,0,0.75) 15%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.8) 85%), url(/homepage/hero-lg.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.down('sm')]: {
      background:
        'linear-gradient(0deg, rgba(0,0,0,0.75) 15%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.8) 85%), url(/homepage/hero-phone.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
  heroContent: {
    marginTop: '2rem',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  heroBtn: {
    color: 'white',
    borderColor: 'inherit',
    marginTop: '2rem',
    '&:hover': {
      background: 'rgba(255,255,255, .2)',
    },
  },
  h1: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  h6: {
    marginTop: '2rem',
    textAlign: 'center',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  bottomClip: {
    position: 'relative',
    top: '1vh',
    height: '10vh',
    '& > svg': {
      height: '100%',
      width: '100%',
      minWidth: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '8vh',
    },
  },
  circle1: {
    position: 'absolute',
    top: '0',
    right: '0',
    transform: 'translate(25%, -25%)',
    width: '30vw',
    height: '30vw',
    maxWidth: '20rem',
    maxHeight: '20rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '1rem 1rem 1rem rgba(0,0,0, .2)',
  },
  purpleCircle: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '10vw',
    height: '10vw',
    maxWidth: '4rem',
    maxHeight: '4rem',
    borderRadius: '50%',
    transform: 'translate(80%, 40%)',
    background:
      'linear-gradient(125deg, rgba(175,124,215,1) 0%, rgba(207,146,255,1) 19%, rgba(110,25,176,1) 80%)',
    boxShadow: '1rem 1rem 1.5rem rgba(0,0,0, .3)',
  },
  circle2: {
    position: 'absolute',
    bottom: '40%',
    left: '0',
    transform: 'translate(-40%, 55%)',
    width: '30vw',
    height: '30vw',
    maxWidth: '18rem',
    maxHeight: '18rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '-.5rem 1rem 1rem rgba(0,0,0, .2)',
    [theme.breakpoints.down('xs')]: {
      bottom: '30%',
      transform: 'translate(-60%, 60%)',
    },
  },
  bluecircle: {
    position: 'absolute',
    bottom: '0',
    right: '20%',
    width: '20vw',
    height: '20vw',
    maxWidth: '6rem',
    maxHeight: '6rem',
    borderRadius: '50%',
    transform: 'translate(40%, 20%)',
    background:
      'linear-gradient(215deg, rgba(84,151,208,1) 0%, rgba(104,186,255,1) 19%, rgba(18,99,168,1) 80%)',
    boxShadow: '-.5rem 1rem 1.5rem rgba(0,0,0, .3)',
    [theme.breakpoints.down('xs')]: {
      width: '15vw',
      height: '15vw',
      maxWidth: '4rem',
      maxHeight: '4rem',
      right: '0%',
    },
  },
  paragraph: {
    padding: '1rem 2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  groupPicContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '30rem',
    height: '50vh',
    maxHeight: '30rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: 'url(/homepage/group_img.jpg)',
    marginTop: '4rem',
  },
  purplecircle2: {
    position: 'absolute',
    zIndex: '1',
    top: '-5%',
    left: '5%',
    width: '10vw',
    height: '10vw',
    maxWidth: '4rem',
    maxHeight: '4rem',
    borderRadius: '50%',
    background:
      'linear-gradient(125deg, rgba(175,124,215,1) 0%, rgba(207,146,255,1) 19%, rgba(110,25,176,1) 80%)',
    boxShadow: '.3rem .5rem .8rem rgba(0,0,0, .25)',
  },
  bluecircle2: {
    position: 'absolute',
    zIndex: '1',
    top: '-15%',
    left: '25%',
    width: '20vw',
    height: '20vw',
    maxWidth: '6rem',
    maxHeight: '6rem',
    borderRadius: '50%',
    boxShadow: '.3rem .5rem .8rem rgba(0,0,0, .25)',
    background:
      'linear-gradient(rgba(104,186,255,1) 19%, rgba(18,99,168,1) 85%)',
  },
  groupPicture: {
    minWidth: '100%',
    width: 'auto',
    height: 'auto',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  bel: {
    paddingLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
      marginTop: '1em',
    },
  },
  testemonials: {
    marginTop: '8rem',
    marginBottom: '6rem',
  },
}));
