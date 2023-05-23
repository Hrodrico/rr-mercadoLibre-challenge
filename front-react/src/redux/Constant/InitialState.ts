import {type AlertColor, type SnackbarOrigin} from '@mui/material';
import {
  type IUser,
  type ILoading,
  type ISnackbar,
  type IStateSnackbar,
  type IPurchaseDetail,
  type IPurchaseCost,
  type IPurchaseSeller,
  type IPurchaseShipment,
  type IPurchasePayment
} from 'interface/Interface';

const severityColor: AlertColor = 'warning';
const SnackbarOriginProp: SnackbarOrigin = {vertical: 'bottom', horizontal: 'right'};

/* Loading/Cargando */
export const iniStateLoading: ILoading = {
  isLoading: false
};

/* Snackbar/Mensaje */
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

/* General Information/Informacion General */
export const iniStateGralInfo: any = {
  dataUser: [],
  dataRestriction: [],
  dataLevel: []
};

/* My Shopping/ Mis compras */
export const iniStateMyShopping: any = {
  dataPurchase: [],
  dataShipment: [],
  dataPayment: []
};

/* Users/Usuario */
export const iniStateGralInfoResponse: IUser = {
  idUser: 0,
  image: '',
  fullname: '',
  level: '',
  restMessage: ''
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
  transaction_id: 0,
  shipment_id: 0
};

export const iniStatePurchaseShipment: IPurchaseShipment = {
  shipment_id: 0,
  status: ''
};

export const iniStatePurchasePayment: IPurchasePayment = {
  transaction_id: 0,
  status: ''
};
