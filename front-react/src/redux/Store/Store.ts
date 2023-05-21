import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
//Slices in Reducer
import loadingSlice from 'redux/Reducer/Loading/LoadingSlice';
import snackbarSlice from 'redux/Reducer/Snackbar/SnackbarSlice';
import generalInfoSlice from 'redux/Reducer/GeneralInformation/GeneralInfoSlice'; //Informacion general
import myshoppingSlice from 'redux/Reducer/MyShopping/MyShoppingSlice'; //Informacion general//Mis compras
import purchaseDetailSlice from 'redux/Reducer/PurchaseDetail/PurchaseDetail'; //Informacion general//Detalle de compras

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    snackbar: snackbarSlice,
    generalInformation: generalInfoSlice,
    myShopping: myshoppingSlice,
    purchaseDetail: purchaseDetailSlice
  }
});
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
