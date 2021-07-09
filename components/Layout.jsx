import Navbar from './Navbar';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  layout: {
    padding: '0 2rem',
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.layout}>
      <Navbar />
      <div className="page-content">{children}</div>
      <footer>
        <p>Copyright@2021 Tech-Recruitment</p>
      </footer>
    </Box>
  );
}
