import React from 'react';
import {Box, Container, CssBaseline} from '@mui/material';
import GeneralInfoTable from './GeneralInfoTable';
import {type IComponentTable} from 'interface/Interface';
import styles from './GeneralInfo.module.css';

const GeneralInfo = ({elementUser}: IComponentTable): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <GeneralInfoTable elementUser={elementUser} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default GeneralInfo;
