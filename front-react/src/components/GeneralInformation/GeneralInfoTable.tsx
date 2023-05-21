import React, {useEffect, useState} from 'react';
import {Avatar, Box, Container, Grid, TextField, Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {initialStateGralInfoResponse} from 'redux/Constant/InitialState';
import {type IUser} from 'interface/Interface';
// import {useAppSelector} from 'hooks/Hooks';
// import {selectAuth} from 'redux/Reducer/Authentication/AuthSlice';
import dataUser from 'mocks/usuarios.json';
import restriccion from 'mocks/restricciones.json';
import styles from './GeneralInfo.module.css';

const GeneralInfoTable = (): JSX.Element => {
  //   const {connected: USER} = useAppSelector(selectAuth);
  const [user, setUser] = useState<IUser>(initialStateGralInfoResponse);

  useEffect(() => {
    const userState: IUser = {
      image: dataUser.profile_image,
      fullname: `${dataUser.name} ${dataUser.surname}`,
      level: dataUser.level,
      restriccion: restriccion.message
    };
    setUser(userState);
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Box className={styles.container}>
          <Box className={styles.containetTable}>
            <Box className={styles.paper}>
              <Avatar className={styles.avatar} src={user.image}>
                <AccountCircleIcon sx={{fontSize: 100}} />
              </Avatar>
              <Typography className={styles.title} component="h1" variant="h6">
                Información general
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <TextField
                    disabled={true}
                    name="displayName"
                    variant="outlined"
                    fullWidth
                    label={'Nombre completo del usuario'}
                    value={user.fullname}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    disabled={true}
                    name="level"
                    value={user.level}
                    variant="outlined"
                    fullWidth
                    label={'Nivel de Mercado Puntos'}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    disabled={true}
                    name="restriccion"
                    value={user.restriccion}
                    variant="outlined"
                    fullWidth
                    label={'Restricciones'}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default GeneralInfoTable;
