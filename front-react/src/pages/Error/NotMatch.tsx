//Material
import {Box, CssBaseline, Container, Typography} from '@mui/material';
//Components
import styles from './NotMatch.module.css';

const NotMatch = () => {
  return (
    <>
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
    </>
  );
};

export default NotMatch;
