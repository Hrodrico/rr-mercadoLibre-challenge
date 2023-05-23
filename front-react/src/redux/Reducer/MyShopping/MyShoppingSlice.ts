/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {type AppThunk, type RootState} from 'redux/Store/Store';
import {toggleLoading} from 'redux/Reducer/Loading/LoadingSlice';
import {setOpenSnackbar} from 'redux/Reducer/Snackbar/SnackbarSlice';
import {types} from 'redux/Types/Types';
import {errorColor, successColor} from 'components/Message/Snackbar';
import {iniStateMyShopping, iniStateSetSnackbar} from 'redux/Constant/InitialState';
import {UriConfig} from 'config';
import {type ISnackbar} from 'interface/Interface';

const apiRest: any = UriConfig.api_url;

// Negocio
export const getPurchases =
  (_userId: number): AppThunk =>
  (dispatch: any) => {
    dispatch(toggleLoading());
    let objSnackbar: ISnackbar = iniStateSetSnackbar;
    axios
      .get(`${apiRest}/meli/user/purchases/${_userId}`)
      .then((response: {data: any}) => {
        dispatch(getRedPurchases(response.data));
        objSnackbar = {
          isOpen: true,
          message: 'Resultado satisfatorio',
          severity: successColor,
          timeOut: iniStateSetSnackbar.timeOut,
          anchorOrigin: iniStateSetSnackbar.anchorOrigin
        };
        dispatch(setOpenSnackbar(objSnackbar));
        dispatch(toggleLoading());
      })
      .catch((error: any) => {
        objSnackbar = {
          isOpen: true,
          message: error.message,
          severity: errorColor,
          timeOut: iniStateSetSnackbar.timeOut,
          anchorOrigin: iniStateSetSnackbar.anchorOrigin
        };
        dispatch(setOpenSnackbar(objSnackbar));
        dispatch(toggleLoading());
        console.log(error);
      });
  };

export const getShipment =
  (_purchaseId: number): AppThunk =>
  (dispatch: any) => {
    axios
      .get(`${apiRest}/meli/user/shipment/${_purchaseId}`)
      .then((response: {data: any}) => {
        dispatch(getRedShipment(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

export const getPayment =
  (_purchaseId: number): AppThunk =>
  (dispatch: any) => {
    axios
      .get(`${apiRest}/meli/user/payment/${_purchaseId}`)
      .then((response: {data: any}) => {
        dispatch(getRedPayment(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

// Reducers
export const myShoppingSlice = createSlice({
  name: types.myShoppingType,
  initialState: {
    ...iniStateMyShopping
  },
  reducers: {
    getRedPurchases: (state: any = iniStateMyShopping, action: any) => {
      state.dataPurchase = action.payload || [];
    },
    getRedShipment: (state: any = iniStateMyShopping, action: any) => {
      state.dataShipment = action.payload || [];
    },
    getRedPayment: (state: any = iniStateMyShopping, action: any) => {
      state.dataPayment = action.payload || [];
    }
  }
});

// Action
export const {getRedPurchases, getRedShipment, getRedPayment} = myShoppingSlice.actions;

// State-Reducer
export const selectMyShopping = (state: RootState) => state.myShopping;
// Expo. Reducer
export default myShoppingSlice.reducer;
