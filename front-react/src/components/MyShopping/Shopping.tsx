import React from 'react';
import {Box, CssBaseline, Container} from '@mui/material';
import ShoppingTable from './ShoppingTable'; // Components
import styles from './Shopping.module.css';

const Shopping = (): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box className={styles.containerTable}>
            <ShoppingTable />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Shopping;
