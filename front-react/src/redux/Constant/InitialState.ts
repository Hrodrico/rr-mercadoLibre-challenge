import {type AlertColor, type SnackbarOrigin} from '@mui/material';
import {
  type IUser,
  type ILoading,
  type ISnackbar,
  type IStateSnackbar,
  type IPurchaseDetail,
  type IPurchaseCost,
  type IPurchaseSeller
} from 'interface/Interface';

const severityColor: AlertColor = 'warning';
const SnackbarOriginProp: SnackbarOrigin = {vertical: 'bottom', horizontal: 'right'};

/* Loading/Cargando */
export const iniStateLoading: ILoading = {
  isLoading: false
};

/* Snackbar */
export const iniStateSetSnackbar: ISnackbar = {
  isOpen: false,
  message: '',
  severity: severityColor,
  timeOut: 3000,
  anchorOrigin: SnackbarOriginProp
};

export const iniStateSnack: IStateSnackbar = {
  dataSnackbar: {...iniStateSetSnackbar}
};

/* General Information */
export const iniStateGralInfo: any = {
  list: []
};

/* My Shopping */
export const iniStateMyShopping: any = {
  list: []
};

/* My Shopping */
export const iniStatePurchaseDetail: any = {
  list: []
};

/* Users/Usuario */
export const iniStateGralInfoResponse: IUser = {
  image: '',
  fullname: '',
  level: '',
  restriccion: ''
};

/* components/PurchaseDetail */
export const iniStatePurchaseCost: IPurchaseCost = {
  total: '',
  currency: ''
};

export const iniStatePurchaseSeller: IPurchaseSeller = {
  id: 0,
  nickname: ''
};

export const iniStatePurchaseDetailResponse: IPurchaseDetail = {
  purchase_id: 0,
  title: '',
  cost: iniStatePurchaseCost,
  amount: 0,
  date: '',
  image: '',
  seller: iniStatePurchaseSeller,
  transaction_status: '',
  shipment_status: ''
};
