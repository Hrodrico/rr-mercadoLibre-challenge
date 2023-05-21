import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {AppThunk, RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {initialStateGralInfo} from 'redux/Constant/InitialState';

//Reducers
export const generalInfoSlice = createSlice({
  name: types.gralInfoType,
  initialState: {
    ...initialStateGralInfo
  },
  reducers: {}
});

//State-Reducer
export const selectGeneralInfo = (state: RootState) => state.generalInformation;
//Expo. Reducer
export default generalInfoSlice.reducer;
