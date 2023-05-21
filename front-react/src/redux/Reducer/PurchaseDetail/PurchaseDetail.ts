import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {AppThunk, RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {initialStatePurchaseDetail} from 'redux/Constant/InitialState';

//Reducers
export const purchaseDetailSlice = createSlice({
  name: types.purchDetailType,
  initialState: {
    ...initialStatePurchaseDetail
  },
  reducers: {}
});

//State-Reducer
export const selectPurchaseDetail = (state: RootState) => state.purchaseDetail;
//Expo. Reducer
export default purchaseDetailSlice.reducer;
