import React, {useState} from 'react';
import {Button, Modal, Box, Stack, Grid, TextField, Typography, IconButton, Tooltip, Avatar} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CloseIcon from '@mui/icons-material/Close';
import {type IPurchaseDetailElement} from 'interface/Interface';
import {transDateToDDMMYYYYY} from 'utils/DateFn';
import {formatNumberToMoney} from 'utils/FormatFn';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4
};

const PurchaseDetail = ({element}: IPurchaseDetailElement): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Detalle de Compra" arrow>
        <IconButton aria-label="purchase-detail" size="large" onClick={handleOpen}>
          <ManageSearchIcon />
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalle de Compra
          </Typography>
          <Box component="form" noValidate sx={{mt: 1}}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Vendedor"
                  variant="outlined"
                  fullWidth
                  name="nickname"
                  value={element.seller?.nickname}
                  disabled
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Id de la Compra"
                  variant="outlined"
                  fullWidth
                  name="purchase_id"
                  value={element.purchase_id}
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Título del ítem"
                  variant="outlined"
                  fullWidth
                  name="title"
                  value={element.title}
                  disabled
                />
              </Grid>

              <Grid item xs={6}>
                <Avatar alt={element.title} src={element.image} sx={{m: 'auto', width: 110, height: 110}} />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Fecha de compra"
                  variant="outlined"
                  fullWidth
                  name="date"
                  value={transDateToDDMMYYYYY(element.date)}
                  disabled
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Precio"
                  variant="outlined"
                  fullWidth
                  name="cost"
                  value={formatNumberToMoney(element.cost.total, element.cost.currency)}
                  disabled
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Cantidad"
                  variant="outlined"
                  fullWidth
                  name="amount"
                  value={element.amount}
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Estado del pago"
                  variant="outlined"
                  fullWidth
                  name="transaction_status"
                  value={element.transaction_status}
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Estado del envío"
                  variant="outlined"
                  fullWidth
                  name="shipment_status"
                  value={element.shipment_status}
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="secondary" startIcon={<CloseIcon />} onClick={handleClose}>
                    Cerrar
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default PurchaseDetail;
