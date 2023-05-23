/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, {useEffect, useState} from 'react';
import {Box, Container, CssBaseline} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'hooks/Hooks';
import {getLevel, getRestriction, selectGeneralInfo} from 'redux/Reducer/GeneralInformation/GeneralInfoSlice';
import {type IUser} from 'interface/Interface';
import {iniStateGralInfoResponse} from 'redux/Constant/InitialState';
import GeneralInfo from 'components/GeneralInformation/GeneralInfo';
import Shopping from 'components/MyShopping/Shopping';
import styles from './Profile.module.css';

const Profile = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {dataUser: USER, dataRestriction: RESTRICTION, dataLevel: LEVEL} = useAppSelector(selectGeneralInfo);
  const [user, setUser] = useState<IUser>(iniStateGralInfoResponse);

  useEffect(() => {
    if (USER.user_id) {
      const usrId: number = USER.user_id;
      const lvlId: string = USER.level;
      dispatch(getRestriction(usrId));
      dispatch(getLevel(lvlId));
    }
  }, [USER]);

  useEffect(() => {
    const userState: IUser = {
      idUser: USER.user_id,
      image: USER.profile_image,
      fullname: `${USER.name} ${USER.surname}`,
      level: LEVEL.description,
      restMessage: RESTRICTION.message,
      restType: RESTRICTION.Type
    };
    setUser(userState);
  }, [RESTRICTION, LEVEL]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <GeneralInfo elementUser={user} />
            <Shopping elementUser={user} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
