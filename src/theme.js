import { createTheme } from '@mui/material/styles';
import { green, deepPurple, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      secondary: deepPurple[500],
      dark: '#262626',
      info: '#FFFFFF'
    },
    secondary: {
      main: '#A3BCF9',
    },
  },
});

export default theme