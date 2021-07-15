import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: {
    backgroundColor: 'rgba(122,122,122,.05)',
    transition: 'all ease in .3s',
    padding: '1rem',
    borderRadius: '0',
    maxWidth: '100%',
  },
  description: {
    minHeight: '18rem',
    [theme.breakpoints.down('xs')]: {
      height: '60vh',
      overflowY: 'auto',
    },
  },
  avatarContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
}));
