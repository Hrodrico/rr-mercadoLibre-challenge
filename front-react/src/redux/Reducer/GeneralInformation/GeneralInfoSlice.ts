/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';
import {type RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {iniStateGralInfo} from 'redux/Constant/InitialState';

// Reducers
export const generalInfoSlice = createSlice({
  name: types.gralInfoType,
  initialState: {
    ...iniStateGralInfo
  },
  reducers: {}
});

// State-Reducer
export const selectGeneralInfo = (state: RootState) => state.generalInformation;
// Expo. Reducer
export default generalInfoSlice.reducer;
