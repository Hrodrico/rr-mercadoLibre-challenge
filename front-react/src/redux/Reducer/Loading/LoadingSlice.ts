/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {createSlice} from '@reduxjs/toolkit';
import {type RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {iniStateLoading} from 'redux/Constant/InitialState';

export const loadingSlice = createSlice({
  name: types.loadType,
  initialState: {...iniStateLoading},
  reducers: {
    toggleLoading: (state: any = iniStateLoading) => {
      state.isLoading = !state.isLoading;
    }
  }
});
export default loadingSlice.reducer;
export const {toggleLoading} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading.isLoading;
