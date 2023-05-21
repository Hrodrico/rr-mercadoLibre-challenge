import React from 'react';
import {styled, useTheme, type Theme, type CSSObject} from '@mui/material/styles';
import {Drawer as MuiDrawer, Box, List, Divider, IconButton} from '@mui/material';
// components

import ItemCollapse from 'components/Home/Drawer/ItemCollapse';
import Item from 'components/Home/Drawer/Item';
import Breadcrumb from 'components/Home/Breadcrumb';
// Interface
import {type IMiniDrawer} from 'interface/Interface';
// Icon MUI
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Constants
import Constant from 'config/Constant';
// Mocks
import dataDrawer from 'mocks/drawer.json';

function MiniDrawer({open, component, handleDrawerClose}: IMiniDrawer): JSX.Element {
  const theme = useTheme();

  const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
  }>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${Constant.drawerWidth}px`,
    ...((open ?? false) && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  }));

  const openedMixin = (theme: Theme): CSSObject => ({
    width: Constant.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`
    }
  });

  const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
  })(({theme, open}) => ({
    width: Constant.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...((open ?? false) && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!(open ?? false) && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  }));

  return (
    <>
      <Box>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {dataDrawer.menuUser?.map((prop: any) => {
              const {menuSub} = prop;
              return <>{menuSub.length > 0 ? <ItemCollapse props={prop} open={open} /> : <Item props={prop} open={open} />}</>;
            })}
          </List>
          <Divider />
          <List>
            {dataDrawer.menuConfig?.map((prop: any) => {
              const {menuSub} = prop;
              return <>{menuSub.length > 0 ? <ItemCollapse props={prop} open={open} /> : <Item props={prop} open={open} />}</>;
            })}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Breadcrumb />
          {component}
        </Main>
      </Box>
    </>
  );
}

export default MiniDrawer;
