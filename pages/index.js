import Testemonial from '../components/Testemonial';
import useStyles from '../styles/homepage.styles';

import {
  Typography,
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
    <>
      <div className={classes.heroContainer}>
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
                  name="alle jobs"
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
                name="contact"
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
                name="contact"
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
          <Grid
            item
            sm={12}
            md={6}
            container
            alignItems="center"
            justifyContent="center"
          >
            <div className={classes.groupPicContainer}>
              <div className={classes.bluecircle2}></div>
              <div className={classes.purplecircle2}></div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <>
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
              <Button
                onClick={handleClose}
                color="primary"
                variant="text"
                name="close dalog"
              >
                Cancel
              </Button>
              <Button
                name="send message"
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
      </>
    </>
  );
}
