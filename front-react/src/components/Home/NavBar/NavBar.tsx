/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, {useEffect, useState} from 'react';
import {AppBar as MuiAppBar, type AppBarProps as MuiAppBarProps, Box, Toolbar, CssBaseline, IconButton} from '@mui/material'; // Mui
import {styled} from '@mui/material/styles';
import NavAvatar from 'components/Home/NavBar/NavAvatar';
import MenuIcon from '@mui/icons-material/Menu';
import {useAppDispatch, useAppSelector} from 'hooks/Hooks';
import {getUser, selectGeneralInfo} from 'redux/Reducer/GeneralInformation/GeneralInfoSlice';
import Constant from 'config/Constant';
import {type INavBar} from 'interface/Interface';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function NavBar({open, handleDrawerOpen}: INavBar): JSX.Element {
  const dispatch = useAppDispatch();
  const {dataUser: USER} = useAppSelector(selectGeneralInfo);
  const [user, setUser] = useState('Unknown User');

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    const fullName: string = USER?.name ? `${USER.name} ${USER.surname}` : 'Unknown User';
    setUser(fullName);
  }, [USER]);

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
  })<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...((open ?? false) && {
      marginLeft: Constant.drawerWidth,
      width: `calc(100% - ${Constant.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  }));

  return (
    <React.Fragment>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && {display: 'none'})
              }}>
              <MenuIcon />
            </IconButton>
            <NavAvatar userName={user} />
            <p>{user}</p>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default NavBar;
