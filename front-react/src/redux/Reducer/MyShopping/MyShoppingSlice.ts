import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {AppThunk, RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {initialStateMyShopping} from 'redux/Constant/InitialState';

//Reducers
export const myShoppingSlice = createSlice({
  name: types.myShoppingType,
  initialState: {
    ...initialStateMyShopping
  },
  reducers: {}
});

//State-Reducer
export const selectMyShopping = (state: RootState) => state.myShopping;
//Expo. Reducer
export default myShoppingSlice.reducer;
