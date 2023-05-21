import {Box, Container, CssBaseline} from '@mui/material';
import CustomizedBreadcrumbs from './Breadcrumb';
import styles from './Breadcrumb.module.css';

const index = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <CustomizedBreadcrumbs />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default index;
