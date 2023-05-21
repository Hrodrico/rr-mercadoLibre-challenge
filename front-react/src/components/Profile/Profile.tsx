import {Box, Container, CssBaseline} from '@mui/material';
import TableProfile from './TableProfile';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <TableProfile />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
