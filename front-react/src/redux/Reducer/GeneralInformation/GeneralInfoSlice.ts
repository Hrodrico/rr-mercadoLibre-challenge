/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createSlice} from '@reduxjs/toolkit';
import {type AppThunk, type RootState} from 'redux/Store/Store';
import {toggleLoading} from 'redux/Reducer/Loading/LoadingSlice';
import {iniStateGralInfo} from 'redux/Constant/InitialState';
import axios from 'axios';
import {types} from 'redux/Types/Types';
import {UriConfig} from 'config';

const apiRest: any = UriConfig.api_url;

// Negocio
export const getUser = (): AppThunk => (dispatch: any) => {
  dispatch(toggleLoading());
  axios
    .get(`${apiRest}/meli/user`)
    .then((response: {data: any}) => {
      dispatch(getRedUser(response.data));
      dispatch(toggleLoading());
    })
    .catch((error: any) => {
      dispatch(toggleLoading());
      console.log(error);
    });
};

export const getRestriction =
  (_userId: number): AppThunk =>
  (dispatch: any) => {
    axios
      .get(`${apiRest}/meli/user/restriction/${_userId}`)
      .then((response: {data: any}) => {
        dispatch(getRedRestriction(response.data[0]));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

export const getLevel =
  (_lvlId: string): AppThunk =>
  (dispatch: any) => {
    dispatch(toggleLoading());
    axios
      .get(`${apiRest}/meli/user/level/${_lvlId}`)
      .then((response: {data: any}) => {
        dispatch(getRedLevel(response.data));
        dispatch(toggleLoading());
      })
      .catch((error: any) => {
        dispatch(toggleLoading());
        console.log(error);
      });
  };

// Reducers
export const generalInfoSlice = createSlice({
  name: types.gralInfoType,
  initialState: {
    ...iniStateGralInfo
  },
  reducers: {
    getRedUser: (state: any = iniStateGralInfo, action: any) => {
      state.dataUser = action.payload || [];
    },
    getRedRestriction: (state: any = iniStateGralInfo, action: any) => {
      state.dataRestriction = action.payload || [];
    },
    getRedLevel: (state: any = iniStateGralInfo, action: any) => {
      state.dataLevel = action.payload || [];
    }
  }
});

// Action
export const {getRedUser, getRedRestriction, getRedLevel} = generalInfoSlice.actions;

// State-Reducer
export const selectGeneralInfo = (state: RootState) => state.generalInformation;
// Expo. Reducer
export default generalInfoSlice.reducer;
