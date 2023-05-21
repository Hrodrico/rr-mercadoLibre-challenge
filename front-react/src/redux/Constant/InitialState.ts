import {AlertColor, SnackbarOrigin} from '@mui/material';
// import {initialFormValidDevolution} from 'constant/InitialForm';
// import {
//   IAccessAuth,
//   IDevolutionBalanceResponseTable,
//   IDevolutionSummaryTable,
//   IForm519DevolutionBalance,
//   IFormDevolutionBalanceDisplay,
//   ILoading,
//   ISnackbar,
//   IStateDevolution,
//   // IStateParam,
//   IStateShortening,
//   IStateSnackbar,
//   IStateUser,
//   IToken,
//   IUser
// } from 'interface/Interface';
import {ILoading, ISnackbar, IStateSnackbar} from 'interface/Interface';

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

// /* Params-Maintainer/Parametros-Mantenedor */
// // export const initialStateParam: IStateParam = {
// export const initialStateParam = {
//   listAllCountry: [],
//   listAllBusinessUnit: [],
//   listAllBranchOffice: []
// };

// /* Users/Usuario */
// export const initialStateGetUser: IUser = {
//   idUser: '',
//   mailUser: '',
//   firstNameUser: '',
//   lastNameUser: '',
//   displayNameUser: '',
//   username: '',
//   stateUser: false
// };

// export const initialStateUser: IStateUser = {
//   listAllUser: [],
//   dataUser: {...initialStateGetUser}
// };

// /* Auth/Autenticación*/
// export const initialStateGetToken: IToken = {
//   accessToken: '',
//   refreshToken: ''
// };

// export const initialStateAuth: IAccessAuth = {
//   token: {...initialStateGetToken},
//   connected: {...initialStateGetUser}
// };

// /* Devolution Balance */
// /* Devolution Balance/Devolución de saldos*/
// export const initialStateDevolutionBalanceResponseTable: IDevolutionBalanceResponseTable = {
//   id: 0,
//   Society: '',
//   MonthYear: '',
//   GLAccount: 0,
//   CostCenter: '',
//   ProfitCenter: '',
//   FunctionalArea: '',
//   Order: 0,
//   Segment: '',
//   Currency: '',
//   InitialBalances: 0,
//   FinalBalances: 0,
//   DBMovements: 0,
//   CRMovements: 0
// };

// export const initialFilterApiDevolution: IForm519DevolutionBalance = {
//   country: '',
//   companyCode: '',
//   monthYear: '',
//   ledger: '0L',
//   currencyType: '10',
//   typeFactor: ''
// };

// export const initialFilterDisplayDevolution: IFormDevolutionBalanceDisplay = {
//   country: '',
//   businessUnit: '',
//   dateLabel: ''
// };

// export const initialStateDevolution: IStateDevolution = {
//   listCountry: [],
//   listBusinessUnit: [],
//   filterForm: {...initialFormValidDevolution},
//   filterApi: {...initialFilterApiDevolution},
//   filterDisplay: {...initialFilterDisplayDevolution},
//   listDevolutionBalance: [],
//   listDevolutionSummary: [],
//   devolutionAuth: '',
//   flagReturn: false
// };

// /* Devolution Summary/Devolución resumen*/
// export const initialStateDevolutionSummary: IDevolutionSummaryTable = {
//   id: 0,
//   item: '',
//   accountMust: '',
//   accountToHave: '',
//   factorPeriod1: 0.0,
//   factorPeriod2: 0.0,
//   factorAverage: 0.0,
//   AmountToConsider: '',
//   IndexPeriod: '',
//   AccumulatedProvision: ''
// };
