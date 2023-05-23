import React from 'react';
import {Avatar, Box, Container, Grid, TextField, Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {type IComponentTable} from 'interface/Interface';
// import dataUser from 'mocks/usuarios.json';
// import restriccion from 'mocks/restricciones.json';
import styles from './GeneralInfo.module.css';

const GeneralInfoTable = ({elementUser}: IComponentTable): JSX.Element => {
  return (
    <>
      <Container maxWidth="sm">
        <Box className={styles.container}>
          <Box className={styles.containetTable}>
            <Box className={styles.paper}>
              <Typography className={styles.title} component="h1" variant="h6">
                Información general
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={1}>
                  <Avatar className={styles.avatar} src={elementUser.image}>
                    <AccountCircleIcon sx={{fontSize: 110}} />
                  </Avatar>
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    disabled={true}
                    name="displayName"
                    variant="outlined"
                    fullWidth
                    label={'Nombre completo del usuario'}
                    value={elementUser.fullname}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    disabled={true}
                    name="level"
                    value={elementUser.level}
                    variant="outlined"
                    fullWidth
                    label={'Nivel de Mercado Puntos'}
                  />
                </Grid>
                {elementUser.restMessage != null && (
                  <Grid item xs={12} md={12}>
                    <TextField
                      disabled={true}
                      name="restriccion"
                      value={elementUser.restMessage}
                      variant="outlined"
                      fullWidth
                      label={'Restricciones'}
                    />
                  </Grid>
                )}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default GeneralInfoTable;
