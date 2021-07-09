import React from 'react';
import Link from 'next/link';
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles({
  logo: {},
  AppBar: {
    boxShadow: 'none',
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" className={classes.AppBar}>
      <Toolbar component={Box}>
        <Link href="/">
          <a>
            <Typography className={classes.logo}>Tech-Recruitment</Typography>
          </a>
        </Link>
        <Link href="/vacatures">
          <a>
            <span style={{ marginLeft: '2rem' }}>Vacatures</span>
          </a>
        </Link>
        <Link href="/over-ons">
          <a>
            <span style={{ marginLeft: '2rem' }}>Over ons</span>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
