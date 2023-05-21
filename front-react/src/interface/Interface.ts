import {MouseEvent, Dispatch, ReactNode, SetStateAction} from 'react';
import {SweetAlertPosition, SweetAlertIcon} from 'sweetalert2';
import {AlertColor, SnackbarOrigin} from '@mui/material';

/* redux/Reducer/Loading/LoadingSlice */
export interface ILoading {
  isLoading: boolean;
}

/* redux/Reducer/Snackbar/SnackbarSlice */
export interface ISnackbar {
  isOpen: boolean;
  message?: string;
  severity?: AlertColor | undefined;
  timeOut?: number;
  anchorOrigin?: SnackbarOrigin | undefined;
}

export interface IStateSnackbar {
  dataSnackbar: ISnackbar;
}

/* components/Alert */
export interface IMessageToastFire {
  icon?: SweetAlertIcon | undefined;
  position?: SweetAlertPosition | undefined;
  title?: string;
  timer?: number;
}

/* components/Home */
export interface IHomeProps {
  component?: JSX.Element | JSX.Element[];
}

/* components/Home/Drawer/Drawer */
export interface IMiniDrawer {
  open: boolean;
  // component?: JSX.Element | JSX.Element[] | undefined | null;
  component?: any | undefined | null;
  handleDrawerClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

/* components/Home/Drawer/ItemCollapse */
export interface IDrawerItemCollapseMenuSubDetail {
  ids: number;
  name: string;
  toolTipText: string;
  icon: string;
  path: string;
}

export interface IDrawerItemCollapseMenuSub {
  id: number;
  name: string;
  toolTipText: string;
  icon: string;
  menuSub: IDrawerItemCollapseMenuSubDetail[];
}

export interface IDrawerItemCollapse {
  props: IDrawerItemCollapseMenuSub;
  open: boolean;
}

/* components/Home/Drawer/Item */
export interface IDrawerItemDetail {
  id: number;
  name: string;
  toolTipText: string;
  icon: string;
  path: string;
}

export interface IDrawerItem {
  props: IDrawerItemDetail;
  open: boolean;
}

/* components/Home/NavBar */
export interface INavBar {
  open: boolean;
  handleDrawerOpen: () => void;
}

export interface INavAvatar {
  userName: string;
}

/* guards */
export interface IGuardProps {
  children?: any | undefined | null;
}
