import Testemonial from '../components/Testemonial';
import {
  makeStyles,
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  DialogTitle,
  CircularProgress,
  MobileStepper,
  useTheme,
  Hidden,
} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import DoneIcon from '@material-ui/icons/Done';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const testemonials = [
  {
    description:
      'Eind 2019 heeft Codecareer met mij contact opgenomen via LinkedIn omtrent een nieuwe uitdaging. Ik ben ingegaan op de uitnodiging en het heeft me geleid tot een nieuwe job. De opvolging en contacten met Codecareer waren heel goed. Altijd zeer vriendelijk, enthousiast en er wordt geluisterd naar je feedback. Codecareer is heel goed op de hoogte van de cultuur en ambitie van het bedrijf waarvoor zij op zoek zijn naar nieuw talent en dat weten ze heel goed over te brengen.',
    img: 'rob.png',
    name: 'Rob Stockmannse',
    title: 'Software Egineer big Evenance Sol.',
  },
  {
    description:
      'Tijdens het corona tijdperk op zoek moeten gaan naar een nieuwe baan, daarbij bijgestaan door Sara tot een goed resultaat. Zeer duidelijk in de communicatie, met geregeld updates en een positieve instelling. Wat ik vooral erg prettig ondervond was dat er weinig aan sturing werd gedaan maar wel werden uitdagingen aangegaan.',
    img: 'eduard.png',
    name: 'Eduard Gertsen',
    title: 'Senior Full-stack Developer',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quas vero? Architecto, eius nobis. Doloremque sequi debitis aperiam assumenda laboriosam, adipisci voluptatibus error quibusdam illo minima! Veritatis, sit, consequuntur excepturi quaerat architecto ea et expedita rem, ut illum corrupti totam.',
    img: 'ed.png',
    name: 'Ed Mars',
    title: 'Data Science Engineer at D&D',
  },
];

const useStyles = makeStyles((theme) => ({
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

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);
  const maxSteps = testemonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep + 2 === testemonials.length) {
      setNextStep(0);
    } else {
      setNextStep((prevNextStep) => prevNextStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep + 2 === testemonials.length) {
      setNextStep(1);
    } else {
      setNextStep(activeStep);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    if (activeStep + 2 === testemonials.length) {
      setNextStep(0);
    } else {
      setNextStep((prevNextStep) => prevNextStep + 1);
    }
  };

  const [icon, setIcon] = useState(null);
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setIcon(null);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    // style button 1.
    setIcon(<CircularProgress size="1rem" style={{ color: 'white' }} />);
    setTimeout(() => {
      setTimeout(() => {
        // close windows
        handleClose();
      }, 2000);
      // style button 2.
      setIcon(<DoneIcon />);
    }, 3000);
  };

  return (
    <Box>
      <div className={classes.hero}>
        <div className={classes.circle1}>
          <div className={classes.purpleCircle}></div>
        </div>
        <div className={classes.heroContent}>
          <Typography
            variant="h1"
            className={classes.h1}
            style={{ color: 'white', maxWidth: '55rem', textAlign: 'center' }}
          >
            Maak alvast kennis met jeuw nieuwe baan.
          </Typography>

          <Typography variant="h6" className={classes.h6}>
            Realistische vacatures. Heldere verwachtingen.
          </Typography>
          <Link href="/vacatures">
            <a style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                size="large"
                className={classes.heroBtn}
              >
                Bekijk alle jobs
              </Button>
            </a>
          </Link>
        </div>
        <div className={classes.circle2}>
          <div className={classes.bluecircle}></div>
        </div>
        <div className={classes.bottomClip}>
          <svg
            width="1439"
            height="183"
            viewBox="0 0 1439 183"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M717.5 97C365.5 97 0.499512 6.49976 0.499512 6.49976L0.5 182.5H717.5H1439L1439 0C1439 0 1069.5 97 717.5 97Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Container style={{ marginTop: '4rem' }}>
        <Typography variant="h1" className={classes.h1} color="textPrimary">
          Vind talent. Behoud talent.
        </Typography>
        <Grid
          container
          spacing={4}
          style={{ marginTop: '4rem' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid
            item
            container
            sm={12}
            md={6}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/homepage/image2.png"
              alt="Plaatz vacatures picture"
              width={350}
              height={350}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <div className={classes.paragraph}>
              <Typography paragraph>
                Het is niet niks om talent te vinden dat bij jouw vacature past,
                maar ook matcht met je organisatiewaarden en collega’s. Onze Job
                Consultants bieden persoonlijke ondersteuning bij het vinden van
                een juiste match en zullen samen met jouw organisatie een
                realistische en uitvoerige vacature opstellen. Dankzij onze
                gerichte marketingcampagnes, actieve werving en uitgebreide
                vacatures, vind én behoud je het talent dat bij jouw organisatie
                past. Op deze manier zorg je er direct voor dat jouw employer
                branding altijd on point is.
              </Typography>
              <Button
                onClick={handleClickOpen}
                variant="outlined"
                color="primary"
                style={{ marginTop: '2rem' }}
                disableElevation
              >
                Plaats vacature
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.testemonials}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {testemonials.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Testemonial step={step} />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
              style={{ width: '100%', marginTop: '2rem' }}
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Hidden xsDown implementation="css">
              <Testemonial
                step={
                  testemonials[nextStep]
                    ? testemonials[nextStep]
                    : testemonials[0]
                }
                secondary={true}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid
          container
          spacing={4}
          style={{ marginTop: '4rem' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item sm={12} md={6} style={{ padding: '2em' }}>
            <Typography variant="h1" className={classes.h1} color="textPrimary">
              Benieuwd wat wij voor jou of jouw organisatie kunnen betekenen?
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClickOpen}
              >
                Neem contact op
              </Button>
              <Typography
                variant="subtitle2"
                color="primary"
                className={classes.bel}
              >
                of bel 5155-5435433
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6} container>
            <div className={classes.groupPicContainer}>
              <div className={classes.bluecircle2}></div>
              <div className={classes.purplecircle2}></div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div>
        <Dialog
          open={show}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
          <form onSubmit={handleMessage}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                placeholder="Your email address..."
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                required
              />
              <TextField
                id="outlined-multiline-static"
                label="Your message"
                multiline
                rows={6}
                placeholder="Type your message here..."
                variant="outlined"
                style={{ marginTop: '2rem' }}
                required
                fullWidth
              />
            </DialogContent>
            <DialogActions style={{ marginTop: '1rem' }}>
              <Button onClick={handleClose} color="primary" variant="text">
                Cancel
              </Button>
              <Button
                color="primary"
                variant="contained"
                endIcon={icon}
                type="submit"
              >
                Send
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </Box>
  );
}
