import React from 'react';
import {Box, CssBaseline, Container, Typography} from '@mui/material';
import styles from './NotMatch.module.css';

const NotMatch = (): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box className={styles.containerTable}>
            <Typography variant="h6" component="h2" color="primary">
              Lo sentimos, la página que solicitó no se pudo encontrar! ⛔️
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default NotMatch;
