import React from 'react';
// import {useNavigate} from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  type AppBarProps as MuiAppBarProps,
  Box,
  Toolbar,
  CssBaseline,
  // Typography,
  IconButton
  // Avatar
} from '@mui/material'; // Mui
import {styled} from '@mui/material/styles';
import NavAvatar from 'components/Home/NavBar/NavAvatar'; // Component
import MenuIcon from '@mui/icons-material/Menu'; // Icon MUI
// import {useAppSelector} from 'hooks/Hooks';
// import {selectAuth} from 'redux/Reducer/Authentication/AuthSlice'; //Redux
// import {PathConfig} from 'config'; // Path Config
import Constant from 'config/Constant'; // Constants
import {type INavBar} from 'interface/Interface';
import dataUser from 'mocks/usuarios.json';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function NavBar({open, handleDrawerOpen}: INavBar): JSX.Element {
  // const navigate = useNavigate();
  // const homePath = PathConfig.patHome;
  //   const {connected: dataUser} = useAppSelector(selectAuth);
  // const fullName: string = dataUser ? `${dataUser.name}` : 'Unknown User';
  const fullName: string = (dataUser?.name).length > 0 ? `${dataUser.name} ${dataUser.surname}` : 'Unknown User';

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
    <>
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
            {/* <IconButton color="secondary" aria-label="home" component="span">
              <Avatar src={dataUser.profile_image} sx={{width: 110, height: 60}} />
            </IconButton> */}
            <NavAvatar userName={fullName} />
            <p>{dataUser?.name}</p>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
