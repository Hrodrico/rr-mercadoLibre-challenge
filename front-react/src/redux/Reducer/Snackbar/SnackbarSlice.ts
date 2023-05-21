/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {type ISnackbar} from 'interface/Interface'; // Interfaces
import {iniStateSnack} from 'redux/Constant/InitialState';

export const snackbarSlice = createSlice({
  name: types.snackbarType,
  initialState: {...iniStateSnack},
  reducers: {
    openSnackbar: (state: any = iniStateSnack, action: PayloadAction<ISnackbar>) => {
      state.dataSnackbar = action.payload;
    }
  }
});

export default snackbarSlice.reducer;

export const {openSnackbar} = snackbarSlice.actions;

export const selectSnackbar = (state: RootState) => state.snackbar.dataSnackbar;

export const setOpenSnackbar = (objSettingSnackbar: ISnackbar) => (dispatch: any) => {
  dispatch(openSnackbar(objSettingSnackbar));
};
