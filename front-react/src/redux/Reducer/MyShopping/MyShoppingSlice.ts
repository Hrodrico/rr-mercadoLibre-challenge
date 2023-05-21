/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';
import {type RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {iniStateMyShopping} from 'redux/Constant/InitialState';

// Reducers
export const myShoppingSlice = createSlice({
  name: types.myShoppingType,
  initialState: {
    ...iniStateMyShopping
  },
  reducers: {}
});

// State-Reducer
export const selectMyShopping = (state: RootState) => state.myShopping;
// Expo. Reducer
export default myShoppingSlice.reducer;
