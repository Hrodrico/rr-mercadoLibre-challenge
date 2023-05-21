import React from 'react';
import {Backdrop, CircularProgress, Stack} from '@mui/material';
import {useAppSelector} from 'hooks/Hooks';
import {selectLoading} from 'redux/Reducer/Loading/LoadingSlice';

function BackdropSimple({open = true}) {
  const isLoad = useAppSelector(selectLoading);
  return (
    <Stack spacing={2} direction="row">
      <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} open={isLoad}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>
  );
}

export default BackdropSimple;
