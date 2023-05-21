/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';
import {type RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {iniStatePurchaseDetail} from 'redux/Constant/InitialState';

// Reducers
export const purchaseDetailSlice = createSlice({
  name: types.purchDetailType,
  initialState: {
    ...iniStatePurchaseDetail
  },
  reducers: {}
});

// State-Reducer
export const selectPurchaseDetail = (state: RootState) => state.purchaseDetail;
// Expo. Reducer
export default purchaseDetailSlice.reducer;
