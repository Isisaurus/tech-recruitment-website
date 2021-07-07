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
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '7.5rem',
      background: 'linear-gradient( 180deg, #1E8DFF, #BE6CFF)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(0.1rem 0.5rem .5rem rgba(0,0,0, .15))',
    },
  },
});

export default theme;
