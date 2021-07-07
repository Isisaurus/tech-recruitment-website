import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0467B1',
    },
    secondary: {
      main: '#6E19B0',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      fontSize: '4rem',
    },
  },
});

export default theme;
