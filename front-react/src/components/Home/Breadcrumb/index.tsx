import React from 'react';
import {Box, Container, CssBaseline} from '@mui/material';
import CustomizedBreadcrumbs from './Breadcrumb';
import styles from './Breadcrumb.module.css';

const index = (): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <CustomizedBreadcrumbs />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default index;
