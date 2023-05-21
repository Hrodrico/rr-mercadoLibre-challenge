import {createTheme} from '@mui/material/styles';
import {esES} from '@mui/material/locale';

const theme: object = {
  palette: {
    primary: {
      light: '#716fa3',
      main: '#fdd100',
      dark: '#181d48',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ffffff',
      main: '#e0e0e0',
      dark: '#aeaeae',
      contrastText: '#000000'
    },
    background: {
      default: '#fafafa'
    }
  }
};

const themeWithLocale = createTheme(theme, esES);

export default themeWithLocale;
