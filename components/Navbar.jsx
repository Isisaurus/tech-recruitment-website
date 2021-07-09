import React from 'react';
import Link from 'next/link';
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  AppBar: {
    boxShadow: 'none',
    marginTop: '1rem',
  },
  logo: {
    marginRight: '2em',
    fontSize: '1.5rem',
    filter: 'none',
    background: 'linear-gradient( 90deg , #1E8DFF, #BE6CFF)',
    fontWeight: 700,
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
  },
  link: {
    textDecoration: 'none',
    color: '#1E8DFF',
    '&:visited': {
      color: '#1E8DFF',
      '&:hover': {
        color: '#7a7a7a',
      },
    },
    '&:hover': {
      color: '#7a7a7a',
    },
  },
  button: {
    marginLeft: 'auto',
    padding: '.5em 2em',
    textTransform: 'none',
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" className={classes.AppBar}>
      <Toolbar style={{ padding: '0' }}>
        <Link href="/">
          <a className={classes.link}>
            <Typography component="h1" className={classes.logo}>
              Tech-Recruitment
            </Typography>
          </a>
        </Link>
        <Link href="/vacatures">
          <a className={classes.link}>
            <Typography variant="subtitle2" className={classes.navEl}>
              Vacatures
            </Typography>
          </a>
        </Link>
        <Link href="/over-ons">
          <a className={classes.link}>
            <Typography variant="subtitle2" className={classes.navEl}>
              Over ons
            </Typography>
          </a>
        </Link>
        <Button variant="contained" className={classes.button} color="primary">
          <Typography>Contact</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
