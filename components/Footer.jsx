import {
  Container,
  Box,
  Typography,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
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

function Footer() {
  const classes = useStyles();
  const [submit, setSubmit] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    document.getElementById('subscribe-form').reset();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 5000);
  };

  return (
    <Box component="footer" className={classes.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Link href="/">
              <a className={classes.link}>
                <MenuItem>
                  <Typography variant="body1">Home</Typography>
                </MenuItem>
              </a>
            </Link>
            <Link href="/vacatures">
              <a className={classes.link}>
                <MenuItem>
                  <Typography variant="body1">Vacatures</Typography>
                </MenuItem>
              </a>
            </Link>
            <Link href="/over-ons">
              <a className={classes.link}>
                <MenuItem>
                  <Typography variant="body1">Over ons</Typography>
                </MenuItem>
              </a>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container style={{ marginBottom: '4rem' }}>
              <form
                className={classes.subscribeContent}
                onSubmit={handleSubscribe}
                id="subscribe-form"
              >
                <input
                  className={classes.subscribeInput}
                  type="email"
                  placeholder="Vul je emailadres in."
                  name="subscribeEmail"
                  id="subscribeEmail"
                  required
                />
                <Button
                  name="subscribe"
                  color="primary"
                  variant="text"
                  className={classes.subscribeButton}
                  type="submit"
                >
                  Aanmelden
                </Button>
              </form>
              {submit ? (
                <Box className={classes.message}>
                  <Typography variant="subtitle2">
                    Thank you for subscribing!
                  </Typography>
                </Box>
              ) : null}
            </Container>
            <Container>
              <Typography variant="subtitle2" style={{ marginTop: '1em' }}>
                Contact
              </Typography>
              <Typography variant="body2" style={{ marginTop: '1em' }}>
                Zeewinde 9 - 5 <br />
                9738AM The Moon
              </Typography>
              <Typography variant="body2" style={{ marginTop: '1em' }}>
                Of bel <b>5155-5435433</b>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
