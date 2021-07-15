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
import useStyles from '../styles/Footer.styles';

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
