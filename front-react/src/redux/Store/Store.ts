import {configureStore, type ThunkAction, type Action} from '@reduxjs/toolkit';
/* Slices in Reducer */
import loadingSlice from 'redux/Reducer/Loading/LoadingSlice';
import snackbarSlice from 'redux/Reducer/Snackbar/SnackbarSlice';
import generalInfoSlice from 'redux/Reducer/GeneralInformation/GeneralInfoSlice';
import myshoppingSlice from 'redux/Reducer/MyShopping/MyShoppingSlice';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    snackbar: snackbarSlice,
    generalInformation: generalInfoSlice,
    myShopping: myshoppingSlice
  }
});
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
