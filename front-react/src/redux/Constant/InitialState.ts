import {type AlertColor, type SnackbarOrigin} from '@mui/material';
import {type IUser, type ILoading, type ISnackbar, type IStateSnackbar} from 'interface/Interface';

const severityColor: AlertColor = 'warning';
const SnackbarOriginProp: SnackbarOrigin = {vertical: 'bottom', horizontal: 'right'};

/* Loading/Cargando */
export const initialStateLoading: ILoading = {
  isLoading: false
};

/* Snackbar */
export const initialStateSetSnackbar: ISnackbar = {
  isOpen: false,
  message: '',
  severity: severityColor,
  timeOut: 3000,
  anchorOrigin: SnackbarOriginProp
};

export const initialStateSnack: IStateSnackbar = {
  dataSnackbar: {...initialStateSetSnackbar}
};

/* General Information */
export const initialStateGralInfo: any = {
  list: []
};

/* My Shopping */
export const initialStateMyShopping: any = {
  list: []
};

/* My Shopping */
export const initialStatePurchaseDetail: any = {
  list: []
};

/* Users/Usuario */
export const initialStateGralInfoResponse: IUser = {
  image: '',
  fullname: '',
  level: '',
  restriccion: ''
};
