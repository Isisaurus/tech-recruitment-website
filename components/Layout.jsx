import Navbar from './Navbar';
import { makeStyles, Box } from '@material-ui/core';
import Footer from './Footer';

const useStyles = makeStyles({
  layout: {
    padding: '0',
  },
  content: {
    marginBottom: '6rem',
    minHeight: '70vh',
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.layout}>
      <Navbar />
      <div className={classes.content}>{children}</div>
      <Footer />
    </Box>
  );
}
