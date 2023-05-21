import React from 'react';
import {Box, Container, CssBaseline} from '@mui/material';
import GeneralInfo from 'components/GeneralInformation/GeneralInfo';
import Shopping from 'components/MyShopping/Shopping';

import styles from './Profile.module.css';

const Profile = (): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <GeneralInfo />
            <Shopping />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
