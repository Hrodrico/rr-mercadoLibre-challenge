import React from 'react';
import {Box, CssBaseline, Container} from '@mui/material';
import ShoppingTable from './ShoppingTable';
import {type IComponentTable} from 'interface/Interface';
import styles from './Shopping.module.css';

const Shopping = ({elementUser}: IComponentTable): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box className={styles.containerTable}>
            <ShoppingTable elementUser={elementUser} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Shopping;
