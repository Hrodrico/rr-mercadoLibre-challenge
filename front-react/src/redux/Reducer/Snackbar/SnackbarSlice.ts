import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateSnack} from 'redux/Constant/InitialState';
import {RootState} from 'redux/Store/Store';
import {types} from 'redux/Types/Types';
import {ISnackbar} from 'interface/Interface'; //Interfaces

export const snackbarSlice = createSlice({
  name: types.snackbarType,
  initialState: {...initialStateSnack},
  reducers: {
    openSnackbar: (state: any = initialStateSnack, action: PayloadAction<ISnackbar>) => {
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
