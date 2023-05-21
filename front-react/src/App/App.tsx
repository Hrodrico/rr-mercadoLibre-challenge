import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {BrowserRouter} from 'react-router-dom';
import BackdropSimple from 'components/Loader/BackdropSimple';
import Snackbar from 'components/Message/Snackbar';
import themeWithLocale from 'theme/Theme';
import Router from 'router/Routes';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={themeWithLocale}>
          <BackdropSimple />
          <Snackbar />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
