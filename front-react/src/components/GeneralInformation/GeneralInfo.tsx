import React from 'react';
import {Box, Container, CssBaseline} from '@mui/material';
import GeneralInfoTable from './GeneralInfoTable';
import styles from './GeneralInfo.module.css';

const GeneralInfo = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <GeneralInfoTable />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default GeneralInfo;
