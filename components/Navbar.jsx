import React from 'react';
import Link from 'next/link';
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Hidden,
  Button,
  MenuItem,
  SwipeableDrawer,
  IconButton,
  DialogContent,
  CircularProgress,
  DialogTitle,
  DialogActions,
  Dialog,
  TextField,
} from '@material-ui/core';

import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import DoneIcon from '@material-ui/icons/Done';

import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    boxShadow: 'none',
    marginTop: '1rem',
    padding: '0 2rem',
    position: 'absolute',
    top: '0',
    [theme.breakpoints.down('xs')]: {
      padding: '0 .5rem',
      marginTop: '0',
    },
  },
  logo: {
    marginRight: '1em',
    fontSize: '1rem',
    filter: 'none',
    background: 'linear-gradient( 90deg , #1E8DFF, #BE6CFF)',
    fontWeight: 700,
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#7a7a7a',
    '&:visited': {
      color: '#7a7a7a',
      '&:hover': {
        color: '#1E8DFF',
      },
    },
    '&:hover': {
      color: '#7a7a7a',
    },
  },
  burgerLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    marginLeft: 'auto',
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      padding: '.3em 2.3em',
    },
  },
  navEl: {
    marginLeft: '1.5em',
  },
  linksContainer: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },
  drawer: {
    padding: '2rem',
    textAlign: 'center',
  },
  burger: {
    position: 'absolute',
    right: '0',
    top: '1rem',
    padding: '0',
  },
}));

function Navbar() {
  const [icon, setIcon] = useState(null);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (e) => {
    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

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
        if (open) {
          toggleDrawer();
        }
      }, 2000);
      // style button 2.
      setIcon(<DoneIcon />);
    }, 3000);
  };

  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="transparent" className={classes.AppBar}>
        <Toolbar style={{ padding: '0' }}>
          <Link href="/">
            <a className={classes.link}>
              <Typography component="h1" className={classes.logo}>
                Tech-Recruitment
              </Typography>
            </a>
          </Link>
          <Hidden xsDown>
            <div className={classes.linksContainer}>
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
              <Button
                name="contact"
                variant="contained"
                size="small"
                className={classes.button}
                color="primary"
                onClick={handleClickOpen}
              >
                <Typography>Contact</Typography>
              </Button>
            </div>
          </Hidden>

          <Hidden implementation="css" smUp>
            <IconButton
              name="toggle burger menu"
              onClick={toggleDrawer}
              color="primary"
              className={classes.burger}
            >
              <MenuOpenOutlinedIcon size="small" />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer}
              onOpen={toggleDrawer}
              disableBackdropTransition
            >
              <div className={classes.drawer}>
                <Link href="/">
                  <a className={classes.burgerLink}>
                    <MenuItem onClick={toggleDrawer}>
                      <Typography variant="subtitle2">Home</Typography>
                    </MenuItem>
                  </a>
                </Link>
                <Link href="/vacatures">
                  <a className={classes.burgerLink}>
                    <MenuItem onClick={toggleDrawer}>
                      <Typography variant="subtitle2">Vacatures</Typography>
                    </MenuItem>
                  </a>
                </Link>
                <Link href="/over-ons">
                  <a className={classes.burgerLink}>
                    <MenuItem onClick={toggleDrawer}>
                      <Typography variant="subtitle2">Over ons</Typography>
                    </MenuItem>
                  </a>
                </Link>
                <Button
                  name="contact"
                  variant="contained"
                  size="small"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                  onClick={handleClickOpen}
                >
                  <Typography>Contact</Typography>
                </Button>
              </div>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </AppBar>
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
              <Button
                name="cancel dialog"
                onClick={handleClose}
                color="primary"
                variant="text"
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
      </div>
    </>
  );
}

export default Navbar;
