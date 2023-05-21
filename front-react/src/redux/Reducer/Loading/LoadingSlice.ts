import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {initialStateLoading} from 'redux/Constant/InitialState';

export const loadingSlice = createSlice({
  name: types.loadType,
  initialState: {...initialStateLoading},
  reducers: {
    toggleLoading: (state: any = initialStateLoading) => {
      state.isLoading = !state.isLoading;
    }
  }
});
export default loadingSlice.reducer;
export const {toggleLoading} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading.isLoading;
