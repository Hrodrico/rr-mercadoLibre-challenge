import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useAppDispatch, useAppSelector} from 'hooks/Hooks';
import {openSnackbar, selectSnackbar} from 'redux/Reducer/Snackbar/SnackbarSlice';
import {Alert, type AlertColor} from '@mui/material';
import {type ISnackbar} from 'interface/Interface';
import Slide, {type SlideProps} from '@mui/material/Slide';

export const warningColor: AlertColor = 'warning';
export const successColor: AlertColor = 'success';
export const errorColor: AlertColor = 'error';
export const infoColor: AlertColor = 'info';
type TransitionProps = Omit<SlideProps, 'direction'>;

export default function SimpleSnackbar(): JSX.Element {
  const objSnackbar = useAppSelector(selectSnackbar);
  const dispatch = useAppDispatch();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    const objSetting: ISnackbar = {
      isOpen: false,
      message: objSnackbar.message,
      severity: objSnackbar.severity,
      timeOut: objSnackbar.timeOut,
      anchorOrigin: objSnackbar.anchorOrigin
    };
    dispatch(openSnackbar(objSetting));
  };

  // Transition from low to Up
  function transitionUp(props: TransitionProps): JSX.Element {
    return <Slide {...props} direction="up" />;
  }

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={objSnackbar.isOpen}
      autoHideDuration={objSnackbar.timeOut}
      anchorOrigin={objSnackbar.anchorOrigin}
      onClose={handleClose}
      TransitionComponent={transitionUp}
      action={action}>
      <Alert onClose={handleClose} severity={objSnackbar.severity} sx={{width: '100%'}}>
        {objSnackbar.message}
      </Alert>
    </Snackbar>
  );
}
